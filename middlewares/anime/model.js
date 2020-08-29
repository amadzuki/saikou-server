const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const AnimeSchema = new mongoose.Schema(
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

AnimeSchema.plugin(AutoIncrement, { id: 'anime_counter', inc_field: 'id' })

const Anime = mongoose.model('Anime', AnimeSchema)

module.exports = Anime
