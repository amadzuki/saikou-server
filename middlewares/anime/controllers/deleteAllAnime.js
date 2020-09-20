const Anime = require('../model')

const deleteAllAnime = async (req, res, next) => {
  try {
    const deleteReport = await Anime.deleteMany()
    res
      .status(200)
      .send({ message: 'Delete all anime successfully', data: deleteReport })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Error deleting anime', error: error })
  }
}
module.exports = deleteAllAnime
