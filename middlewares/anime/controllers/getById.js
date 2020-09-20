const Anime = require('../model')

const getById = async (req, res, next) => {
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
}

module.exports = getById
