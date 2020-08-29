const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const UserSchema = new mongoose.Schema(
  {
    name: String,
    coverSrc: String,
    coverAlt: String,
    slug: String,
    description: String,
    tagLine: String,
    favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
)

UserSchema.plugin(AutoIncrement, { id: 'manga_counter', inc_field: 'id' })

const Manga = mongoose.model('Manga', UserSchema)

module.exports = Manga
