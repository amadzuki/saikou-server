const User = require('../model')

const deleteById = async (req, res, next) => {
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
}

module.exports = deleteById
