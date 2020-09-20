const Manga = require('../model')

const getById = async (req, res, next) => {
  const mangaId = Number(req.params.id)
  try {
    const mangaData = await Manga.findOne({ id: mangaId })

    if (mangaData) {
      res.status(200).send({ title: 'Manga details', data: mangaData })
    } else {
      res.status(400).send({ message: 'manga is not found' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Database error' })
  }
}

module.exports = getById
