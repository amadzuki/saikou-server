const { get } = require('mongoose')
const Manga = require('../model')

const getAll = async (req, res, next) => {
  const allManga = await Manga.find().select(
    '-description -tagLine -createdAt -updatedAt'
  )
  res.status(200).send({ title: 'List of Manga', data: allManga })
}

module.exports = getAll
