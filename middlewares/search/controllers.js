const Anime = require('../anime/model')
const Manga = require('../manga/model')

module.exports = {
  searchItem: async (req, res, next) => {
    const itemType = req.query.itemType
    const keyword = req.query.keyword
    try {
      const items =
        itemType === 'anime'
          ? await Anime.find({
              $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
                { tagLine: { $regex: keyword, $options: 'i' } },
              ],
            })
          : await Manga.find({
              $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
                { tagLine: { $regex: keyword, $options: 'i' } },
              ],
            })

      res.status(200).send({
        message: 'Search succeeded',
        query: { keyword: keyword },
        data: items,
      })
    } catch (error) {
      res.status(500).send({ message: 'Database search error', error: error })
    }
  },
}
