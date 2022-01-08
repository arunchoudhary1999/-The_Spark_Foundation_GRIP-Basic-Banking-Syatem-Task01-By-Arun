const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerId: {
        type: Number,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
})

const customer = mongoose.model('customer', customerSchema);
module.exports = customer