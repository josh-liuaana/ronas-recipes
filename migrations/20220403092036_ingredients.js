exports.up = function (knex) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments('ingredient_id')
    table.string('ingredient_name')
    table.integer('ingredient_amount')
  })
}
exports.down = function (knex) {
  return knex.schema.dropTable('ingredients')
}
