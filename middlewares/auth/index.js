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
router.post('/logout', auth.isAuthorized, auth.deauthenticate)
module.exports = router
