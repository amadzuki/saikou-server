const Manga = require('../model')

const addManga = async (req, res, next) => {
  const mangaArray = req.body
  try {
    await Manga.create(mangaArray)
    res.status(200).send({ message: 'Add new anime success', data: mangaArray })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Error adding new anime', error: error })
  }
}

module.exports = addManga
