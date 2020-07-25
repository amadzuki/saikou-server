const express = require('express')
const router = express.Router()
const User = require('./controller')

/* GET users listing. */
router.get('/', User.getAll)

module.exports = router
