const User = require('../model')

const getUserProfile = async (req, res, next) => {
  const mongoId = req.decodedAccessToken._id
  try {
    const userProfile = await User.findById(mongoId, '-hash').populate(
      'favoriteAnime favoriteManga',
      '-slug -description -tagLine'
    )

    res.status(200).send({
      message: 'Token authenticated successfully',
      data: userProfile,
    })
  } catch (error) {
    res.status(500).send({ message: 'error find by mongoId', error: error })
  }
}

module.exports = getUserProfile
