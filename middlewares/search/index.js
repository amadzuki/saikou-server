const express = require('express')
const router = express.Router()

const search = require('./controllers')

router.get('/', search.searchItem)

module.exports = router
