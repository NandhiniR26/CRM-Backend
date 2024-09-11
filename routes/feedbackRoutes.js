const express = require("express");
const feedbackController = require('../controllers/feedbackController')
const feedbackRouter = express.Router();
const auth = require('../middleware/auth');

feedbackRouter.post('/',feedbackController.createFeedback);
// feedbackRouter.get('/',auth.verifyToken,feedbackController.getAllFeedbacks);
feedbackRouter.get('/',feedbackController.getAllFeedbacks);
feedbackRouter.get('/:id',auth.verifyToken,feedbackController.getFeedbackById);
feedbackRouter.put('/:id',auth.verifyToken,feedbackController.updateFeedback);
feedbackRouter.delete('/:id',auth.verifyToken,feedbackController.deleteFeedback);


module.exports = feedbackRouter;

