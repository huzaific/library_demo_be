const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user')

userRouter.get('/', userController.fetchAllUsers);

userRouter.get('/:id', userController.fetchSingleUser);

userRouter.put('/:id', userController.updateUser);

module.exports = userRouter;
