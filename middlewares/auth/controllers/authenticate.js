const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
  if (req.isRegistered && req.isPasswordCorrect) {
    const payload = {
      _id: req.user._id,
      id: req.user.id,
      //   username: req.user.username, // not implemented yet
      email: req.user.email,
    }

    await jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '3 days',
      },
      (err, result) => {
        if (err) {
          res.status(400).send({ message: 'Token creation is failed' })
        }

        res.status(200).send({
          message: 'User is successfully authenticated',
          accessToken: result,
        })
      }
    )
  } else {
    res
      .status(500)
      .send({ message: 'Authentication failed due to unknown reason' })
  }
}
module.exports = authenticate
