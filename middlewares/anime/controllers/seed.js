const Anime = require('../model')
const seedData = require('../seed.json')

const seed = async (req, res) => {
  try {
    await seedData.forEach(async (anime) => {
      await Anime.create({
        ...anime,
        coverUrl: `${process.env.API_URL}${anime.coverUrl}`,
      })
    })
    res.status(200).send({ message: 'Seed anime succeeded' })
  } catch (error) {
    res.status(500).send({ message: 'Error seeding anime data', error: error })
  }
}

module.exports = seed
