const express = require('express');
const customerController=require('../controllers/customerController');
const customerRouter=express.Router();
const auth = require('../middleware/auth');

customerRouter.post('/',auth.verifyToken,customerController.createCustomer);
customerRouter.get('/',auth.verifyToken,customerController.getAllCustomers);
customerRouter.get('/:id',auth.verifyToken,customerController.getCustomerById);
customerRouter.put('/:id',auth.verifyToken,customerController.updateCustomer);
customerRouter.delete('/:id',auth.verifyToken,customerController.deleteCustomer);

module.exports = customerRouter;