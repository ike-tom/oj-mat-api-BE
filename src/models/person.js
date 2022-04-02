const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    _id: {
        type:Number
    },
    name: {
        required: true,
        type: String
    },
    gender: {
        required: true,
        type: String
    }
}, { _id: false })

module.exports = mongoose.model('Data', personSchema)