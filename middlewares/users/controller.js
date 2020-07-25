const User = require('./model')

module.exports = {
  getAll: async (req, res, next) => {
    const allUsers = await User.find()
    res.status(200).send({ title: 'List of users', users: allUsers })
  },
}
