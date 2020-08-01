const Consultant = require('../../database/models/Consultant');
const createConsultant = async (args) => {
    const {
        firstname,
        lastname,
        primaryPhone,
        travelXp,
        about,
        primaryPlaces,
        profilePicture = '',
        email = '',
        social = [],
        plans = [],
        profession = '',
        tags = "",
        ratings,
        reviews = []
    } = args.consultantInput;

    const consultant = new Consultant({
        firstname,
        lastname,
        primaryPhone,
        travelXp,
        about,
        primaryPlaces,
        profilePicture,
        email,
        social,
        plans,
        profession,
        tags,
        ratings,
        reviews
    })

    try {
        const result = await consultant.save();
        return { ...result._doc, _id: result.id };
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = createConsultant;