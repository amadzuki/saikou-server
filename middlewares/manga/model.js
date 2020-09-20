const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const MangaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    coverUrl: String,
    coverAlt: String,
    slug: String,
    description: String,
    tagLine: String,
    favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    collection: 'manga',
    timestamps: true,
  }
)

MangaSchema.plugin(AutoIncrement, { id: 'manga_counter', inc_field: 'id' })

const Manga = mongoose.model('Manga', MangaSchema)

module.exports = Manga
