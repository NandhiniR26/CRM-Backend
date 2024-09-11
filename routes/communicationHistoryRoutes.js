const express = require("express");
const communicationHistoryController = require("../controllers/communicationHistoryController");
const communicationHistoryRouter = express.Router();
const auth  = require("../middleware/auth");

communicationHistoryRouter.post('/',auth.verifyToken,communicationHistoryController.createCommunicationHistory);
//communicationHistoryRouter.get('/',auth.verifyToken,communicationHistoryController.getAllCommunicationHistory);
communicationHistoryRouter.get('/',communicationHistoryController.getAllCommunicationHistory);
communicationHistoryRouter.get('/:id',auth.verifyToken,communicationHistoryController.getCommunicationHistoryById);
communicationHistoryRouter.put('/:id',auth.verifyToken,communicationHistoryController.updateCommunicationHistory);
communicationHistoryRouter.delete('/:id',auth.verifyToken,communicationHistoryController.deleteCommunicationHistory);

module.exports = communicationHistoryRouter;