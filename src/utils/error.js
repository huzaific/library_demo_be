const errors = {
    notFoundError: (message) => {
        const error = new Error(message || 'Resource not Found')
        error.code = 404;
        return error;
    },
    internalServerError: (message) => {
        const error = new Error(message || 'Internal server error')
        error.code = 500;
        return error;
    },

}

module.exports = errors