const User = require('./model')

module.exports = {
  getAll: async (req, res, next) => {
    const allUsers = await User.find()
    res.status(200).send({ title: 'List of users', users: allUsers })
  },

  getById: async (req, res, next) => {
    const userId = Number(req.params.id)
    try {
      const user = await User.findOne({ id: userId })

      const userData = {
        id: user.id,
        alias: user.alias,
        avatar: user.avatar,
        dateJoined: user.createdAt,
      }
      if (user) {
        res.status(200).send({ title: 'User details', user: userData })
      } else {
        res.status(400).send({ message: 'user is not found' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'Database error' })
    }
  },

  getUserProfile: async (req, res, next) => {
    const mongoId = req.decodedAccessToken._id
    const userProfile = await User.findById(mongoId, '-hash -_id')

    res.status(200).send({
      message: 'Token authenticated successfully',
      data: userProfile,
    })
  },

  updateUserProfile: async (req, res, next) => {
    const mongoId = req.decodedAccessToken._id
    const user = await User.findById(mongoId)
    const body = {
      alias: req.body.alias || user.alias,
      bio: req.body.bio || user.bio,
      avatar: req.body.avatar || user.avatar,
      favoriteAnime: req.body.favoriteAnime || user.favoriteAnime,
      favoriteManga: req.body.favoriteManga || user.favoriteManga,
    }

    const updatedUser = await User.findByIdAndUpdate(mongoId, body, {
      new: true,
      select: '-hash -_id',
    })

    res.status(200).send({
      message: 'User profile updated successfully',
      data: { user: updatedUser },
    })
  },
}
