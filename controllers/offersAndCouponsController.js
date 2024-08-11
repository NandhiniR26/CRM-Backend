
const OffersAndCoupons = require('../models/offersAndCoupons');


const offersAndCouponsController = {
    //Post/api/offersAndCoupons
    createOffersAndCoupons: async(req,res)=> {
        try{
            //get the data from the request body
            const {code,
            description,
            discountAmount,
            startDate,
            endDate} = req.body; 

            //create a new OffersAndCoupons
            const newOffersAndCoupons = new OffersAndCoupons({
            code,
            description,
            discountAmount,
            startDate,
            endDate
            }) ;

            //save it to database
            const savedOffersAndCoupons = await newOffersAndCoupons.save();
            //return the saved 
            res.send({message:"Offers and Coupons created successfully", offersAndCoupons: savedOffersAndCoupons});

        }catch(error){
            res.send({message:error.message});
        }
    },
    //Get/api/offersAndCoupons
    getAllOffersAndCoupons: async(req,res) => {
        try{
            //get all from the database
            const offersAndCoupons = await OffersAndCoupons.find();
            //return 
            res.send({ message: "All offersAndCoupons",offersAndCoupons});
        }catch(error) {
            res.send({message:error.message});
        }
    },
    //Get OffersAndCoupons by id
    getOffersAndCouponsById : async(req,res)=>{
        try{
            //get the id from the request parameters
            const offersAndCouponsId = req.params.id;
            //find by id
            const offersAndCoupons  = await OffersAndCoupons.findById(offersAndCouponsId);
            //if it does not exist,return an error
            if(!offersAndCoupons){
                return res.send({message:"Offers and Coupons does not exist"});
            }
            //return
            res.send({message:"OffersAndCoupons",offersAndCoupons});
        
        }catch (error) {
            res.send({message:error.message});
        }
            },
    //PUT/api/offerAndCoupons
    updateOffersAndCoupons: async (req,res)=> {
        try{
            //get by id from the req params
            const offerAndCouponsId = req.params.id;
            //get the data from the req body
            const { code,
                description,
                discountAmount,
                startDate,
                endDate } = req.body;
            //find by id and update it
            const updatedOffersAndCoupons = await OffersAndCoupons.findByIdAndUpdate(offerAndCouponsId,{
                code,
                description,
                discountAmount,
                startDate,
                endDate
            },{new:true});
            //return the updated
            res.send({message:"Offers and Coupons updated successfully",offersAndCoupons:updatedOffersAndCoupons});
        } catch (error) {
            res.send({message:error.message});
        }
    },
    //DEL/api/offersAndCoupons
    deleteOffersAndCoupons : async(req,res)=> {
        try{
            //get
            const offerAndCouponsId  = req.params.id;
            //find by id and delete
            const deletedOffersAndCoupons = await OffersAndCoupons.findByIdAndDelete(offersAndCouponsId);
            //if it does not exist return error
            if(!deletedOffersAndCoupons) {
                return res.send({message:"Offers and Coupons does not exist"})
            }
            //return a success message
            res.send ({ message: "Offers and Coupons deleted successfully"});
        }catch (error) {
            res.send({message: error.message})
        }
    }


}
module.exports = offersAndCouponsController;