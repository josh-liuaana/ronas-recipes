const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/ingredients', (req, res) => {
  db.getIngredients()
    .then((ingredients) => {
      res.render('ingredients', { ingredients: ingredients })
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/ingredients', (req, res) => {
  console.log(req.body) // => returns {ingredient: '', quantity: ''} / delete: '' if delete button pressed
  db.addDelFunc(req.body)
    .then(() => {
      res.redirect('ingredients')
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/recipes', (req, res) => {
  res.send('THIS IS WHERE THE RECIPES WILL LIVE')
})

module.exports = router
