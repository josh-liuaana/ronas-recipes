const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h1>HOMEPAGE IS A WORK IN PROGRESS</h1>')
})

router.get('/ingredients', (req, res) => {
  db.getIngredients()
    .then((ingredients) => {
      res.render('home', { ingredients: ingredients })
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/ingredients', (req, res) => {
  // console.log(req.body) => returns {ingredient: '', quantity: ''}
  db.addIngredients(req.body)
    .then(() => {
      res.redirect('ingredients')
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
