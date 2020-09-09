const Manga = require('./model')

module.exports = {
  getAll: async (req, res, next) => {
    const allManga = await Manga.find().select(
      '-description -tagLine -createdAt -updatedAt'
    )
    res.status(200).send({ title: 'List of Manga', data: allManga })
  },

  getById: async (req, res, next) => {
    const mangaId = Number(req.params.id)
    try {
      const mangaData = await Manga.findOne({ id: mangaId })

      if (mangaData) {
        res.status(200).send({ title: 'Manga details', data: mangaData })
      } else {
        res.status(400).send({ message: 'manga is not found' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Database error' })
    }
  },

  addManga: async (req, res, next) => {
    const mangaArray = req.body
    try {
      await Manga.create(mangaArray)
      res
        .status(200)
        .send({ message: 'Add new anime success', data: mangaArray })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Error adding new anime', error: error })
    }
  },

  deleteMangaById: async (req, res, next) => {
    const mangaId = req.params.id
    try {
      const deleteReport = await Manga.deleteOne({ id: mangaId })
      res
        .status(200)
        .send({ message: 'Delete one manga successfully', data: deleteReport })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Error deleting manga', error: error })
    }
  },

  deleteAllManga: async (req, res, next) => {
    try {
      const deleteReport = await Manga.deleteMany()
      res
        .status(200)
        .send({ message: 'Delete all manga successfully', data: deleteReport })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Error deleting manga', error: error })
    }
  },

  updateMangaData: async (req, res, next) => {
    const mangaId = req.params.id
    const manga = await Manga.findOne({ id: mangaId })
    const body = {
      name: req.body.name || manga.name,
      coverSrc: req.body.coverSrc || manga.coverSrc,
      coverAlt: req.body.coverAlt || manga.coverAlt,
      slug: req.body.slug || manga.slug,
      description: req.body.description || manga.description,
      tagLine: req.body.tagLine || manga.tagLine,
      favoritedBy: manga.favoritedBy,
    }
    if (req.body.favorited) {
      body.favoritedBy.push(req.decodedAccessToken._id)
    } else {
      body.favoritedBy = manga.favoritedBy.filter(
        (_id) => req.decodedAccessToken._id !== _id
      )
    }
    const updatedManga = await Manga.findOneAndUpdate({ id: mangaId }, body, {
      new: true,
      select: '-__v',
    })

    res.status(200).send({
      message: 'Manga data updated successfully',
      data: { manga: updatedManga },
    })
  },
}
