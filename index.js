const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 5000
const cors = require('cors')
const heroes = require('./routes/heroes')


app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use('/heroes', heroes)


app.listen(port, () => {
  console.log(`Server running on ${port}`)
})