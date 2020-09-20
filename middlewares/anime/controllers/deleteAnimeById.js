const Anime = require('../model')

const deleteAnimeById = async (req, res, next) => {
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
}

module.exports = deleteAnimeById
