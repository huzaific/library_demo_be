/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    {
      name: 'Data structures and Algo',
      author: 'harry',
      borrowed_by_id: 4,
      date_of_borrow: new Date(),
      date_of_return: new Date()
    },
    {
      name: 'React Basics',
      author: 'michele'
    },

    {
      name: 'State management principles',
      author: 'huzaifa'
    },
  ]);
};
