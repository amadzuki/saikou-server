const User = require('../model')

const getById = async (req, res, next) => {
  const userId = Number(req.params.id)
  try {
    const userData = await User.findOne({ id: userId }, '-hash').populate(
      'favoriteAnime favoriteManga',
      '-slug -description -tagLine'
    )

    if (userData) {
      res.status(200).send({ title: 'User details', data: userData })
    } else {
      res.status(400).send({ message: 'user is not found' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Database error' })
  }
}

module.exports = getById
