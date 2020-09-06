const mongoose = require('../../config/mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const UserSchema = new mongoose.Schema(
  {
    alias: {
      type: String,
      // required: true,
      min: 2,
      max: 50,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 50,
      unique: true,
    },
    hash: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    favoriteAnime: {
      type: Array,
    },
    favoriteManga: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
)

UserSchema.plugin(uniqueValidator)
UserSchema.plugin(AutoIncrement, { id: 'user_counter', inc_field: 'id' })

const User = mongoose.model('User', UserSchema)

module.exports = User
