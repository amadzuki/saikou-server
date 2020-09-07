const express = require('express')
const router = express.Router()
const anime = require('./controllers')
const auth = require('../auth/controllers')

router.get('/', anime.getAll)

router.get('/:id', anime.getById)

router.post('/', anime.addAnime)

router.put('/:_id', auth.isAuthenticated, anime.updateAnimeData)

router.delete('/', anime.deleteAllAnime)

router.delete('/:id', anime.deleteAnimeById)

module.exports = router
