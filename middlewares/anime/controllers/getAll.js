const Anime = require('../model')

const getAll = async (req, res, next) => {
  const allAnime = await Anime.find().select(
    '-description -tagLine -createdAt -updatedAt'
  )
  res.status(200).send({ title: 'List of Anime', data: allAnime })
}

module.exports = getAll
