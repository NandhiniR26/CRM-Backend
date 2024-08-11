const Customer = require('../models/customer');

const customerController = {
      //POST
      createCustomer:async(req,res)=>{
        try{
            //get the user input from request body
           const{name,email,phone,address,
            preferences} = req.body;

            //create a new customer
            const newCustomer = new Customer({
                name,
                email,
                phone,
                address,
                
                preferences,
                
         });

         //save the customer to the database
         const savedCustomer = await newCustomer.save();

         //return the saved customer
         res.send({message:"Customer created successfully",customer:savedCustomer});

        }catch(error){
            res.send({message:error.message});
        }
      },
      //GET
      getAllCustomers:  async (req,res)=> {
        try{
            //get all customers from the database
            const customers = await Customer.find();
        
            //return 
            res.send({message: "All customers",customers});

        } catch (error) {
              res.send({message:error.message});
        }
      },
      //GET products by ID
      getCustomerById: async (req,res) => {
        try{
            //get the customer id from the req parameters
            const customerId = req.params.id;

            //find the product by id
            const customer  = await Customer.findById(customerId);

            //if the customer does not exist,return an error
            if(!customer) {
                return res.send({message:"Customer does not exist"});
            }
            //return
            res.send({ message:"Customer",customer});

        }catch (error) {
            res.send({message:error.message});
        }
      },
      //PUT
      updateCustomer:async (req,res)=>{
        try{
            //get the customer id from the request parameters
            const customerId = req.params.id;


            //get the data from the request body
            const{name,email,phone,address,preferences} = req.body;

            //find the customer by id and update it
            const updatedCustomer = await Customer.findByIdAndUpdate(customerId, {
                name,
                email,
                phone,
                address,
                
                preferences
                
            },{ new:true});
            //return the updated product
            res.send({message: "Customer updated successfully",customer:updatedCustomer});
        } catch (error) {
            res.send({message:error.message});
        }
      },
          
         //DELETE
         deleteCustomer: async(req,res)=>{
            try{
                //get the customer id from the request parameters
                const customerId = req.params.id;

                //find the customer by id and delete it
                const deletedCustomer = await Customer.findByIdAndDelete(customerId);

                //if the customer does not exist,return an error
                if(!deletedCustomer) {
                    return res.send({message: " Customer does not exist"});
                }
                //return a success message
                res.send({message:"Customer deleted successfully"});

            }catch(error) {
                res.send({message:error.message});
            }
         }


}


module.exports=customerController;