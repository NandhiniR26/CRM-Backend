const CommunicationHistory = require("../models/communicationHistory");

const communicationHistoryController = {
    //Post/api/communicationHistory
    createCommunicationHistory: async (req,res)=> {
        try{

            //get the data from the request body
            const {customerId,date,communicationType,content} = req.body;

            //create a new CommunicationHistory
            const newCommunicationHistory = new CommunicationHistory ({
                customerId,date,communicationType,content
            
            });
            //save to the database
            const savedCommunicationHistory = await newCommunicationHistory .save();
            //return the saved communicationHistory
            res.send({message:"CommunicationHistory created successfully",CommunicationHistory : savedCommunicationHistory });
        }catch(error){
            res.send({message:error.message});
        }
    },
    //Get /api/CommunicationHistory 
    getAllCommunicationHistory: async(req,res) => {
        try{
            //get all communicationHistory from the database
            const communicationHistory = await CommunicationHistory.find();
            //return the communicationHistory
            res.send({ message: "All communicationHistory",communicationHistory});
        }catch(error) {
            res.send({message:error.message});
        }
    },
    //Get CommunicationHistory by id
    getCommunicationHistoryById : async(req,res)=>{
try{
    //get the communicationHistory id from the request parameters
    const communicationHistoryId = req.params.id;
    //find by id
    const communicationHistory  = await CommunicationHistory.findById(communicationHistoryId);
    //if it does not exist,return an error
    if(!communicationHistory){
        return res.send({message:"CommunicationHistory does not exist"});
    }
    //return
    res.send({message:"CommunicationHistory",communicationHistory});

}catch (error) {
    res.send({message:error.message});
}
    },
    //Put/api/communicationHistory
    updateCommunicationHistory: async (req,res)=> {
        try{
            //get by id from the req params
            const communicationHistoryId = req.params.id;
            //get the data from the req body
            const {customerId,date,communicationType,content } = req.body;
            //find by id and update it
            const updatedCommunicationHistory = await CommunicationHistory.findByIdAndUpdate(communicationHistoryId,{
                customerId,date,communicationType,content
            },{new:true});
            //return the updated
            res.send({message:"CommunicationHistory updated successfully",communicationHistory:updatedCommunicationHistory});
        } catch (error) {
            res.send({message:error.message});
        }
    },
    //Delete
    deleteCommunicationHistory : async(req,res)=> {
        try{
            //get
            const communicationHistoryId  = req.params.id;
            //find by id and delete
            const deletedCommunicationHistory = await CommunicationHistory.findByIdAndDelete(communicationHistoryId);
            //if it does not exist return error
            if(!deletedCommunicationHistory) {
                return res.send({message:"CommunicationHistory does not exist"})
            }
            //return a success message
            res.send ({ message: "CommunicationHistory deleted successfully"});
        }catch (error) {
            res.send({message: error.message})
        }
    }


}


module.exports=communicationHistoryController;