const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      // required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    hash: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

UserSchema.plugin(AutoIncrement, { id: 'user_counter', inc_field: 'id' })

const User = mongoose.model('User', UserSchema)

module.exports = User
