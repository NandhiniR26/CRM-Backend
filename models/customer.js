const mongoose  = require("mongoose");

//create a schema
const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String },
    },
    purchaseHistory: [
        {
            date: { type: Date, default: Date.now },
            items: [{ type: String }],
            total: { type: Number }
        }
    ],
    preferences: {
        fabricTypes: [String],
        colors: [String],
        designs: [String]
    },
    feedback: { type: String },


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



// createdAt:{
//     type:Date,
//     default: Date.now
// },
// updatedAt: {
//     type:Date,
//     default:Date.now
// },