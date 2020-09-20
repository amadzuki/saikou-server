const User = require('../model')

const getUsers = async (req, res, next) => {
  const users = await User.find(
    req.query,
    'id alias avatar favoriteAnime favoriteManga'
  )
  res.status(200).send({ title: 'List of users', data: users })
}

module.exports = getUsers
