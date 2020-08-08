const express = require('express')
const router = express.Router()
const users = require('./controller')

/* GET users listing. */
router.get('/', users.getAll)

router.get('/:id', users.getById)

module.exports = router
