var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).send({ title: 'Saikou Server Express Mongoose' })
})

module.exports = router
