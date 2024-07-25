
//create a router
const express = require('express');
const userRouter = express.Router();
const userController=require('../controllers/userController')

//add routes
userRouter.get('/',userController.getData);

//export the router
module.exports = userRouter;