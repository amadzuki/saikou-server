const bcrypt = require('bcrypt')

const isPasswordCorrect = async (req, res, next) => {
  if (req.isRegistered) {
    const match = await bcrypt.compare(req.body.password, req.user.hash)
    if (match) {
      req.isPasswordCorrect = true
      next()
    } else {
      res.status(401).send({ message: 'Password do not match' })
    }
  } else {
    res
      .status(412)
      .send({ message: 'User is not registered yet', email: req.body.email })
  }
}

module.exports = isPasswordCorrect
