const mongoose = require('mongoose')
const { Schema } = mongoose;
const types = Schema.Types;

const Consultant = new Schema({
    firstname: {
        type: types.String,
        required: true
    },
    lastname: {
        type: types.String,
        required: true
    },
    primaryPhone: {
        type: types.String,
        required: true
    },
    travelXp: {
        type: types.Number,
        required: true
    },
    about: {
        type: types.String,
        required: true
    },
    primaryPlaces: {
        type: types.Array,
        required: true
    },
    profilePicture: types.String,
    email: types.String,
    social: types.Array,
    plans: types.Array,
    profession: types.String,
    tags: types.Array,
    ratings: types.Number,
    reviews: types.Array
})

module.exports = mongoose.model('Consultant', Consultant);