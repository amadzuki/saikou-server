const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const AnimeSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      unique: true,
    },
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
    _id: false,
    collection: 'anime',
    timestamps: true,
  }
)

AnimeSchema.plugin(AutoIncrement)

const Anime = mongoose.model('Anime', AnimeSchema)

module.exports = Anime
