const mongoose = require('mongoose')

const DATABASE_URL =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/database'

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
mongoose.set('useCreateIndex', true)

module.exports = mongoose
