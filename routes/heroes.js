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







module.exports = app
