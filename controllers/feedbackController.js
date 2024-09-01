const Feedback = require('../models/feedback');

const feedbackController = {
     //POST request for feedback.js
     createFeedback: async (req,res) => {
        try {
           //get the data from the request body 
           const {customerId,feedbackText,rating} =req.body;

           //create a new feedback
           const newFeedback = new Feedback ({
            customerId,
            feedbackText,
            rating
           });

           //save the feedback to the database
           const savedFeedback = await newFeedback.save();

           //return the saved feedback
           res.send({message: "Feedback created successfully",feedback: savedFeedback});
        } catch (error) {
            res.send({message:error.message});
        }
     },
     //GET the feedback
     getAllFeedbacks : async ( req,res ) => {
        try{
            //get all feedback from the database
            const feedbacks = await Feedback.find();
            //return the feedback
            res.send({message: "All feedbacks",feedbacks});
        }catch (error) {
            res.send ({message: error.message});
        }
     },
        //GET feedback by ID
        getFeedbackById: async (req,res) => {
            try{
                //get the feedback id from the req parameters
                const feedbackId = req.params.id;
    
                //find the product by id
                const feedback  = await Feedback.findById(feedbackId);
    
                //if the customer does not exist,return an error
                if(!feedback) {
                    return res.send({message:"feedback does not exist"});
                }
                //return
                res.send({ message:"Feedback",feedback});
    
            }catch (error) {
                res.send({message:error.message});
            }
          },
           //PUT
      updateFeedback :async (req,res)=>{
        try{
            //get the feedback id from the request parameters
            const feedbackId = req.params.id;


            //get the data from the request body
            const{customerId,
                feedbackText,
                rating} = req.body;

            //find the feedback by id and update it
            const updatedFeedback = await Feedback.findByIdAndUpdate(feedbackId, {
                customerId,
                feedbackText,
                rating
                
            },{ new:true});
            //return the updated feedback
            res.send({message: "Feedback updated successfully",feedback:updatedFeedback});
        } catch (error) {
            res.send({message:error.message});
        }
      },
       //DELETE
       deleteFeedback: async(req,res)=>{
        try{
            //get the feedback id from the request parameters
            const feedbackId = req.params.id;

            //find the feedback by id and delete it
            const deletedFeedback = await Feedback.findByIdAndDelete(feedbackId);

            //if the feedback does not exist,return an error
            if(!deletedFeedback) {
                return res.send({message: " Feedback does not exist"});
            }
            //return a success message
            res.send({message:"Feedback deleted successfully"});

        }catch(error) {
            res.send({message:error.message});
        }
     }

}
module.exports = feedbackController;

// "customerId": "66ba416a9b2495780f0588e4",