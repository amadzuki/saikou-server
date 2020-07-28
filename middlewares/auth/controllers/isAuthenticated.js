const jwt = require('jsonwebtoken')

const isAuthenticated = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1]
    if (accessToken) {
      await jwt.verify(accessToken, process.env.JWT_SECRET, (err, result) => {
        if (result) {
          req.decodedAccessToken = result
          next()
        } else {
          res.status(500).send({
            message: 'Token is not verified',
          })
        }
      })
    }
  } catch (error) {
    console.error(error)
    res.status(400).send({
      message: 'The user is unable to authenticate',
      error: 'Token is not provided in the Authorization header',
    })
  }
}

module.exports = isAuthenticated
