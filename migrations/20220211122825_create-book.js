/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('books', (table) => {
        table.increments();
        table.string('name');
        table.string('author');
        table.datetime('date_of_borrow').nullable();
        table.datetime('date_of_return').nullable();
        table.integer('borrowed_by_id').references('id').inTable('users').onDelete('set null');
        table.timestamps();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('books');

};
