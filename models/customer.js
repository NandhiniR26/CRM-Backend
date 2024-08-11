const mongoose  = require("mongoose");

//create a schema
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      preferences: {
        type: String,
        required: true,
      },


    createdAt:{
    type:Date,
    default: Date.now
},
    updatedAt: {
    type:Date,
    default:Date.now
}
});



//create a model and export it
module.exports=mongoose.model('Customer',customerSchema,'customers');





