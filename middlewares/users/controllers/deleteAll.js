const User = require('../model')

const deleteAll = async (req, res, next) => {
  const report = await User.deleteMany({})
  res.status(200).send({
    message: 'All users deleted',
    data: { deletedUsersCount: report.deletedCount },
  })
}

module.exports = deleteAll
