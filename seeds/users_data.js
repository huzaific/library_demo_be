/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      firstname: 'huzaifa',
      lastname: 'mujahid',
      email: 'huzaifashaikh741@gmail.com'
    },
    {
      firstname: 'john',
      lastname: 'doe',
      email: 'johndoe@gmail.com'
    },
    {
      firstname: 'alice',
      lastname: 'bary',
      email: 'alice@gmail.com'
    },
  ]);
};
