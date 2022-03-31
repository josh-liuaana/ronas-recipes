const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getIngredients(db = connection) {
  return db('ingredients').select()
}

module.exports = {
  getIngredients,
}
