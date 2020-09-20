const Anime = require('../model')

const addAnime = async (req, res, next) => {
  const animeArray = req.body
  try {
    await Anime.create(animeArray)
    res.status(200).send({ message: 'Add new anime success', data: animeArray })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Error adding new anime', error: error })
  }
}

module.exports = addAnime
