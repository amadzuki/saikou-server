const User = require('../model')

const updateUserProfile = async (req, res, next) => {
  const mongoId = req.decodedAccessToken._id
  const user = await User.findById(mongoId)
  const body = {
    alias: req.body.alias || user.alias,
    bio: req.body.bio || user.bio,
    avatar: req.body.avatar || user.avatar,
    favoriteAnime: req.body.favoriteAnime || user.favoriteAnime,
    favoriteManga: req.body.favoriteManga || user.favoriteManga,
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(mongoId, body, {
      new: true,
      select: '-hash -updatedAt',
    }).populate('favoriteAnime favoriteManga', '-slug -description -tagLine')

    res.status(200).send({
      message: 'User profile updated successfully',
      data: { user: updatedUser },
    })
  } catch (error) {
    res.status(500).send({ message: 'update data error', error: error })
  }
}

module.exports = updateUserProfile
