const { partialDeepStrictEqual } = require('assert');
const mongoose = require('mongoose');
const tvSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
     brand: {    
        type: String,
         required: true,
    },
    price: {
        type: Number,
        required: true, 
    },
    modelyear: {
        type: Number,
        required: true, 
    },
    screensize: {    
        type: String,
        required: true,
    },
    resolution: {    
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('Tv', tvSchema);