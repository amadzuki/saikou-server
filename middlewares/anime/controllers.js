const Anime = require('./model')

module.exports = {
  getAll: async (req, res, next) => {
    const allAnime = await Anime.find().select(
      '-description -tagLine -createdAt -updatedAt'
    )
    res.status(200).send({ title: 'List of Anime', data: allAnime })
  },

  getById: async (req, res, next) => {
    const animeId = Number(req.params.id)
    try {
      const animeData = await Anime.findOne({ id: animeId })

      if (animeData) {
        res.status(200).send({ title: 'Anime details', data: animeData })
      } else {
        res.status(400).send({ message: 'anime is not found' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Database error' })
    }
  },

  addAnime: async (req, res, next) => {
    const animeArray = req.body
    try {
      await Anime.create(animeArray)
      res
        .status(200)
        .send({ message: 'Add new anime success', data: animeArray })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Error adding new anime', error: error })
    }
  },

  deleteAnimeById: async (req, res, next) => {
    const animeId = req.params.id
    try {
      const deleteReport = await Anime.deleteOne({ id: animeId })
      res
        .status(200)
        .send({ message: 'Delete one anime successfully', data: deleteReport })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Error deleting anime', error: error })
    }
  },

  deleteAllAnime: async (req, res, next) => {
    try {
      const deleteReport = await Anime.deleteMany()
      res
        .status(200)
        .send({ message: 'Delete all anime successfully', data: deleteReport })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Error deleting anime', error: error })
    }
  },

  updateAnimeData: async (req, res, next) => {
    const animeId = req.params.id
    const anime = await Anime.findOne({ id: animeId })
    const body = {
      name: req.body.name || anime.name,
      coverSrc: req.body.coverSrc || anime.coverSrc,
      coverAlt: req.body.coverAlt || anime.coverAlt,
      slug: req.body.slug || anime.slug,
      description: req.body.description || anime.description,
      tagLine: req.body.tagLine || anime.tagLine,
      favoritedBy: anime.favoritedBy,
    }
    if (req.body.favorited) {
      body.favoritedBy.push(req.decodedAccessToken._id)
    } else {
      body.favoritedBy = anime.favoritedBy.filter(
        (_id) => req.decodedAccessToken._id !== _id
      )
    }
    const updatedAnime = await Anime.findOneAndUpdate({ id: animeId }, body, {
      new: true,
      select: '-__v',
    })

    res.status(200).send({
      message: 'Anime data updated successfully',
      data: { anime: updatedAnime },
    })
  },
}
