const express = require('express');
const customerController=require('../controllers/customerController');
const customerRouter=express.Router();
const auth = require('../middleware/auth');

//customerRouter.post('/',auth.verifyToken,auth.isAdmin,customerController.createCustomer);
customerRouter.post('/',customerController.createCustomer);

customerRouter.get('/',customerController.getAllCustomers);
//customerRouter.get('/:id',auth.verifyToken,customerController.getCustomerById);
customerRouter.get('/:id',customerController.getCustomerById);
//customerRouter.put('/:id',auth.verifyToken,auth.isAdmin,customerController.updateCustomer);
customerRouter.put('/:id',customerController.updateCustomer);
//customerRouter.delete('/:id',auth.verifyToken,auth.isAdmin,customerController.deleteCustomer);
customerRouter.delete('/:id',customerController.deleteCustomer);

module.exports = customerRouter; 