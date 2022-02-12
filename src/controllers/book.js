const knex = require('../config/database');
const errors = require('../utils/error');

const fetchAllBooks = async (req, res, next) => {
    try {
        const response = await knex('books').select('books.*', 'users.firstname')
            .leftJoin('users', 'books.borrowed_by_id', 'users.id')

        res.json(response);
    } catch (err) {
        next(err)
    }
}

const fetchSingleBook = async (req, res, next) => {
    try {
        const { id } = req.params
        const response = await knex('books').select('*').where({ id })

        if (!response[0])
            throw errors.notFoundError()

        res.json(response[0]);
    } catch (err) {
        next(err)
    }
}

const updateBook = async (req, res, next) => {

    try {
        const { id } = req.params

        const found = await knex('books').select('*').where({
            id
        })

        if (!found[0])
            throw errors.notFoundError()

        await knex('books').where({
            id
        }).update(req.body)

        res.json(found[0]);
    } catch (err) {
        next(err)
    }
}

module.exports = {
    fetchAllBooks,
    fetchSingleBook,
    updateBook
}