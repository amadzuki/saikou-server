const Manga = require('../model')

const deleteMangaById = async (req, res, next) => {
  const mangaId = req.params.id
  try {
    const deleteReport = await Manga.deleteOne({ id: mangaId })
    res
      .status(200)
      .send({ message: 'Delete one manga successfully', data: deleteReport })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Error deleting manga', error: error })
  }
}

module.exports = deleteMangaById
