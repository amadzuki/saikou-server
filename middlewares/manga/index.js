const express = require('express')
const router = express.Router()
const manga = require('./controllers')
const auth = require('../auth/controllers')

router.get('/', manga.getAll)

router.get('/:id', manga.getById)

router.post('/', manga.addManga)

router.put('/:_id', auth.isAuthenticated, manga.updateMangaData)

router.delete('/', manga.deleteAllManga)

router.delete('/:id', manga.deleteMangaById)

module.exports = router
