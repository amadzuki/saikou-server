const User = require('../../users/model')

const isRegistered = async (req, res, next) => {
  const result = await User.findOne({ email: req.body.email })
  if (result) {
    req.isRegistered = true
    req.user = result
    next()
  } else {
    req.isRegistered = false
    next()
  }
}

module.exports = isRegistered
