const express = require('express')
const router = express.Router()
const users = require('./controller')
const auth = require('../auth/controllers')

/* GET users listing. */
router.get('/', users.getAll)

router.get('/profile', auth.isAuthorized, users.getUserProfile)

router.get('/:id', users.getById)

module.exports = router
