const knex = require('../config/database');
const errors = require('../utils/error');

const fetchAllUsers = async (req, res, next) => {
    try {
        const response = await knex('users').select('*')
        res.json(response);
    } catch (err) {
        next(err)
    }
}

const fetchSingleUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const response = await knex('users').select('*').where({
            id
        })

        if (!response[0])
            throw errors.notFoundError()

        res.json(response[0])

    } catch (err) {
        next(err)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const found = await knex('users').select('*').where({
            id
        })

        if (!found[0])
            throw errors.notFoundError()

        await knex('users').where({
            id
        }).update(req.body)
        res.json(found[0]);

    } catch (err) {
        next(err)
    }
}

module.exports = {
    fetchAllUsers,
    fetchSingleUser,
    updateUser
}