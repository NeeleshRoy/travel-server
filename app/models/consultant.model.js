const mongoose = require("mongoose");
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
    primaryPlaces: {
        type: types.Array,
        required: true
    },
    email: {
        type: types.String,
        required: true
    },
    password: {
        type: types.String,
        required: true,
    },
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],
    about: types.String,
    profilePicture: types.String,
    social: types.Array,
    plans: types.Array,
    profession: types.String,
    tags: types.Array,
    ratings: types.Number,
    reviews: types.Array
})

module.exports = mongoose.model('Consultant', Consultant);