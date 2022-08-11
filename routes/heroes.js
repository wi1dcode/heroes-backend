const express = require('express')
const app = express()
const superHeroes = require('../superHeroes')
const { verifyHero } = require('../middlewares/verifyHero')


app.get('/', (req, res) => {
  res.json(superHeroes)

})

app.get('/:slug', verifyHero, (req, res) => {
    res.json(req.hero)
})

app.get('/:slug/powers', verifyHero, (req, res) => {
    res.json(req.hero.power)
})

app.post('/', (req, res) => {
  const { slug, name, power, color, isAlive, age, image } = req.body
  const hero = {
    slug: slug,
    name: name,
    power: power,
    color: color,
    isAlive: isAlive,
    age: age,
    image: image
  }
    
  
  
  const existingHero = superHeroes.find((hero) => {
    return hero.slug === slug
  })
  
  
  if (!existingHero) {
    superHeroes.push(hero)
  } else {
    res.status(409).json("Hero already exists")
  }


    
  res.json(hero)

})

app.put('/:slug/powers', verifyHero, (req, res) => {
  res.json(req.hero.power)
})




module.exports = app
