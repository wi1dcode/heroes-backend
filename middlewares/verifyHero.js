const superHeroes = require('../superHeroes')

const verifyHero = (req, res, next) => {
  const { slug, power} = req.params
  const hero = superHeroes.find(superHeroes => superHeroes.slug === slug)
//   const powers = superHeroes.find(superHeroes => superHeroes.power === power)
  const heroIndex = superHeroes.findIndex(superHeroes => superHeroes.slug === slug)

  if (!hero) {
    console.log('je suis dans mon middleware')
    res.status(404).json('Hero not found')
  } else {
    req.hero = hero
    // req.powers = powers
    req.heroIndex = heroIndex
    next()
  }


}

module.exports = {
  verifyHero: verifyHero
}