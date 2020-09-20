const Anime = require('../model')

const updateAnimeData = async (req, res, next) => {
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
}

module.exports = updateAnimeData
