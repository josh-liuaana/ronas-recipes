exports.seed = function (knex) {
  return knex('ingredients')
    .del()
    .then(function () {
      return knex('ingredients').insert([
        { ingredient_id: 1, ingredient_name: 'Eggs', ingredient_amount: '10' },
        {
          ingredient_id: 2,
          ingredient_name: 'Lentils',
          ingredient_amount: '0',
        },
        {
          ingredient_id: 3,
          ingredient_name: 'Chopped Tomatoes',
          ingredient_amount: '2',
        },
      ])
    })
}
