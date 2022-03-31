const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h1>HOMEPAGE IS A WORK IN PROGRESS</h1>')
})

module.exports = router
