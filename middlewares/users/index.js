const express = require('express')
const router = express.Router()
const users = require('./controllers')
const auth = require('../auth/controllers')

/* GET users listing. */
router.get('/', users.getAll)

// GET another user profile
router.get('/:id', users.getById)

// GET detailed user profile at login
router.get(
  '/:_id/profile',
  auth.isAuthenticated,
  auth.isAuthorized,
  users.getUserProfile
)

// PUT edit logged in user data
router.put(
  '/:_id/profile',
  auth.isAuthenticated,
  auth.isAuthorized,
  users.updateUserProfile
)

router.delete('/', users.deleteAll)

router.delete('/:id', users.deleteById)

module.exports = router
