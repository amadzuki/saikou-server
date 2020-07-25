const User = require('../../users/model')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  if (req.isRegistered) {
    res.status(409).send({
      message: 'This email is already registered',
      email: req.body.email,
    })
  } else {
    const saltRounds = 11
    const hash = await bcrypt.hash(req.body.password, saltRounds)

    await User.create({
      // username: req.body.username,
      email: req.body.email,
      hash: hash,
    })

    res.status(200).send({ message: 'Registration completed' })
  }
}

module.exports = register
