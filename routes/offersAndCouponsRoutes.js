const express = require("express");
const offersAndCouponsRouter = express.Router();
const offersAndCouponsController = require("../controllers/offersAndCouponsController");
const auth = require('../middleware/auth');

offersAndCouponsRouter.post('/',auth.verifyToken,offersAndCouponsController.createOffersAndCoupons);
// offersAndCouponsRouter.get('/',auth.verifyToken,offersAndCouponsController.getAllOffersAndCoupons);
 offersAndCouponsRouter.get('/',offersAndCouponsController.getAllOffersAndCoupons);
offersAndCouponsRouter.get('/:id',auth.verifyToken,offersAndCouponsController.getOffersAndCouponsById);
offersAndCouponsRouter.put('/:id',auth.verifyToken,offersAndCouponsController.updateOffersAndCoupons);
offersAndCouponsRouter.delete('/:id',auth.verifyToken,offersAndCouponsController.deleteOffersAndCoupons);

module.exports =  offersAndCouponsRouter;