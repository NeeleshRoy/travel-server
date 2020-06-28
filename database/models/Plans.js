 const mongoose = require('mongoose')
 const { Schema } = mongoose;
 const types = Schema.Types;

 const Plan = new Schema({
     name: {
         type: types.String,
         required: true
     },
     overview: {
        type: types.String,
        required: true
    },
    location: {
        type: types.String,
        required: true
    },
    price: {
        type: types.String,
        required: true
    },
    minPrice: {
        type: types.String,
        required: true
    },
    prerequisites: types.Array,
    days: {
        type: types.Number,
        required: true
    },
    inclusions: types.Array,
    specialPlaces: types.Array,
    photos: types.Array,
    vlog: types.String,
    consultantId: {
        type: types.ObjectId,
        required: true
    },
    itinerary: types.Array
 })

 module.exports = mongoose.model('Plan', Plan);