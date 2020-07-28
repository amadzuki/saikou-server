const express = require('express')
const router = express.Router()

const auth = require('./controllers')

router.post('/register', auth.isRegistered, auth.register)
router.post(
  '/login',
  auth.isRegistered,
  auth.isPasswordCorrect,
  auth.authenticate
)

module.exports = router
