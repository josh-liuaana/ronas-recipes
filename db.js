const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getIngredients(db = connection) {
  return db('ingredients').select()
}

function addIngredients(add, db = connection) {
  console.log(add.ingredient)
  return db('ingredients').insert({
    ingredient_name: add.ingredient,
    ingredient_amount: add.quantity,
  })
}

module.exports = {
  getIngredients,
  addIngredients,
}
