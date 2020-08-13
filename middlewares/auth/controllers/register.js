const User = require('../../users/model')
const randomAliases = require('../../../data/randomAliases.json')
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
    const random = Math.floor(Math.random() * 17)

    await User.create({
      email: req.body.email,
      hash: hash,
      alias: randomAliases[random].alias,
      avatar: randomAliases[random].avatar,
      bio:
        'I am too busy watching anime and reading manga that I do not bother edit my own bio. Even when the edit profile button is just few pixels away',
    })

    res.status(200).send({ message: 'Registration completed' })
  }
}

module.exports = register
