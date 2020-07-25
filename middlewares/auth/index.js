const express = require('express')
const router = express.Router()

const auth = require('./controllers')

router.get('/', (req, res, next) => {
  res.status(200).send({ message: 'The auth endpoint works!' })
})

router.post('/register', auth.isRegistered, auth.register)

module.exports = router
