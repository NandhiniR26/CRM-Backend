// model for feedback.js

const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
        required: true
    },
    feedbackText: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type:Date,
        default:Date.now
    }
});

//create a model and export it
module.exports = mongoose.model('Feedback',feedbackSchema,'feedback');
