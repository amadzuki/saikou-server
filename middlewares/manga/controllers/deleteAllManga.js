const Manga = require('../model')

const deleteAllManga = async (req, res, next) => {
  try {
    await Manga.counterReset('manga_counter', () => {})
    const deleteReport = await Manga.deleteMany()
    res
      .status(200)
      .send({ message: 'Delete all manga successfully', data: deleteReport })
    next()
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Error deleting manga', error: error })
  }
}
module.exports = deleteAllManga
