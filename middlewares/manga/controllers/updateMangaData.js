const Manga = require('../model')

const updateMangaData = async (req, res, next) => {
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
}

module.exports = updateMangaData
