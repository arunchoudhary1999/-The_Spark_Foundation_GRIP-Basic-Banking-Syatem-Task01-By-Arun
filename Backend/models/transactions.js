const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    transactionId: {
        type: Number,
        required: true,
        unique: true
    },
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const transaction = mongoose.model('transaction', transactionSchema);
module.exports = transaction