const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h1>HOMEPAGE IS A WORK IN PROGRESS</h1>')
})

router.get('/ingredients', (req, res) => {
  res.send('THIS WILL SOON BE A LIST OF INGREDIENTS IN YOUR PANTRY')
})

module.exports = router
