const Manga = require('../model')
const seedData = require('../seed.json')

const seed = async (req, res) => {
  try {
    await seedData.forEach(async (manga) => {
      await Manga.create({
        ...manga,
        coverUrl: `${process.env.API_URL}${manga.coverUrl}`,
      })
    })
    res.status(200).send({ message: 'Seed manga succeeded' })
  } catch (error) {
    res.status(500).send({ message: 'Error seeding manga data', error: error })
  }
}

module.exports = seed
