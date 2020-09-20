const User = require('../model')

const adminUpdateUser = async (req, res, next) => {
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
}

module.exports = adminUpdateUser
