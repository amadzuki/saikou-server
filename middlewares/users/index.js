const express = require('express')
const router = express.Router()
const users = require('./controller')
const auth = require('../auth/controllers')

/* GET users listing. */
router.get('/', users.getAll)

// GET detailed user profile at login
router.get(
  '/:_id/profile',
  auth.isAuthenticated,
  auth.isAuthorized,
  users.getUserProfile
)

// GET another user profile
router.get('/:id', users.getById)

// PUT edit logged in user data
router.put('/:_id/profile', auth.isAuthenticated, auth.isAuthorized)

module.exports = router
