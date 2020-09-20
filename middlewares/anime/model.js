const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const AnimeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    coverSrc: String,
    coverAlt: String,
    slug: String,
    description: String,
    tagLine: {
      type: String,
      maxlength: 193,
    },
    favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    collection: 'anime',
    timestamps: true,
  }
)

AnimeSchema.plugin(AutoIncrement, { id: 'anime_counter', inc_field: 'id' })

const Anime = mongoose.model('Anime', AnimeSchema)

module.exports = Anime
