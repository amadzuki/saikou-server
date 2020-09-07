const User = require('./model')

module.exports = {
  getUsers: async (req, res, next) => {
    const users = await User.find(
      req.query,
      'id alias avatar favoriteAnime favoriteManga'
    )
    res.status(200).send({ title: 'List of users', data: users })
  },

  getById: async (req, res, next) => {
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
  },

  getUserProfile: async (req, res, next) => {
    const mongoId = req.decodedAccessToken._id
    const userProfile = await User.findById(mongoId, '-hash').populate(
      'favoriteAnime favoriteManga',
      '-slug -description -tagLine'
    )

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
      select: '-hash -_id -__v -updatedAt',
    })

    res.status(200).send({
      message: 'User profile updated successfully',
      data: { user: updatedUser },
    })
  },

  adminUpdateUser: async (req, res, next) => {
    const id = req.params.id
    const user = await User.findOne({ id: id })
    const body = {
      alias: req.body.alias || user.alias,
      bio: req.body.bio || user.bio,
      avatar: req.body.avatar || user.avatar,
      favoriteAnime: req.body.favoriteAnime || user.favoriteAnime,
      favoriteManga: req.body.favoriteManga || user.favoriteManga,
    }

    const updatedUser = await User.findOneAndUpdate({ id: id }, body, {
      new: true,
      select: '-hash -_id -__v -updatedAt',
    })

    res.status(200).send({
      message: 'User profile updated successfully',
      data: { user: updatedUser },
    })
  },

  deleteById: async (req, res, next) => {
    const user = await User.findOne({ id: req.params.id })

    if (user) {
      await User.deleteOne({ id: req.params.id })
      res.status(200).send({
        message: 'Successfully deleted one user',
        data: { deletedUser: user },
      })
    } else {
      res.status(412).send({ message: 'user is not exists' })
    }
  },

  deleteAll: async (req, res, next) => {
    const report = await User.deleteMany({})
    res.status(200).send({
      message: 'All users deleted',
      data: { deletedUsersCount: report.deletedCount },
    })
  },
}
