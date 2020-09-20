const Anime = require('../model')

const deleteAllAnime = async (req, res, next) => {
  try {
    await Anime.counterReset('anime_counter', () => {})
    const deleteReport = await Anime.deleteMany()
    if (req.method === 'DELETE') {
      res
        .status(200)
        .send({ message: 'Delete all anime successfully', data: deleteReport })
    } else {
      next()
    }
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Error deleting anime', error: error })
  }
}
module.exports = deleteAllAnime
