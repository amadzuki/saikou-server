const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const MangaSchema = new mongoose.Schema(
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
    tagLine: String,
    favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    _id: false,
    collection: 'manga',
    timestamps: true,
  }
)

MangaSchema.plugin(AutoIncrement)

const Manga = mongoose.model('Manga', MangaSchema)

module.exports = Manga
