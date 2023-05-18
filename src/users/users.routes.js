const { Router } = require('express');
const { registerUser, findUser, topUp } = require('./users.controllers');
const userRouter = Router();

userRouter.post('/users', registerUser);
userRouter.get('/users/:uID', findUser);
userRouter.put('/users', topUp);
// userRouter.delete('/users', deleteUser);

module.exports = userRouter;
