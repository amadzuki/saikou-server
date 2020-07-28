const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
  if (req.isRegistered && req.isPasswordCorrect) {
    const payload = {
      _id: req.user._id,
      id: req.user.id,
      //   username: req.user.username, // not implemented yet
      email: req.user.email,
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '3 days',
    })

    if (token) {
      res.status(200).send({
        message: 'User is successfully authenticated',
        accessToken: token,
      })
    } else {
      res.status(400).send({ message: 'Token creation is failed' })
    }
  } else {
    res
      .status(500)
      .send({ message: 'Authentication failed due to unknown reason' })
  }
}
module.exports = authenticate
