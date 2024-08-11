const mongoose = require('mongoose')

//create a schema
const communicationHistorySchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
      },
      date: {
        type: Date,
        default:Date.now,
        required:true,
      },
     communicationType: {
        type: String, 
        enum : ['email','phone','meeting'],required:true
    },
    content: {
        type: String,
        required:true
    
     
      },
      createdAt:{
        type:Date,
        default: Date.now
    },
        updatedAt: {
        type:Date,
        default:Date.now
    }
})

//create a model and export it
module.exports = mongoose . model ('CommunicationHistory',communicationHistorySchema,"CommunicationHistory")