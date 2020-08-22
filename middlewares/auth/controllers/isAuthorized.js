const User = require('../../users/model')

const isAuthorized = async (req, res, next) => {
  const _id = req.params._id
  const user = await User.findById(req.decodedAccessToken._id)
  if (user._id.equals(_id)) {
    next()
  } else {
    res.status(401).send({
      messaga: 'The user is unauthorized to perform this call',
      error: 'Id inside token does not match with the expected user',
    })
  }
}

module.exports = isAuthorized
