const { add } = require('nodemon/lib/rules')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getIngredients(db = connection) {
  return db('ingredients').select()
}

// function addIngredients(add, db = connection) {
//   // console.log(add.ingredient)
//   return db('ingredients').insert({
//     ingredient_name: add.ingredient,
//     ingredient_amount: add.quantity,
//   })
// }

// function deleteIngredients(item, db = connection) {
//   console.log(item.delete)
//   return db('ingredients').where({ ingredient_name: add.delete }).delete()
// }

function addDelFunc(add, db = connection) {
  if (add.ingredient == null || add.quantity == null) {
    return db('ingredients').where({ ingredient_name: add.delete }).delete()
  } else if (add.delete == null) {
    return db('ingredients').insert({
      ingredient_name: add.ingredient,
      ingredient_amount: add.quantity,
    })
  }
}

module.exports = {
  getIngredients,
  // addIngredients,
  // deleteIngredients,
  addDelFunc,
}
