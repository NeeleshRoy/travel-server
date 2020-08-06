const db = require("../models");
const Plan = db.plan;

const jwt = require("jsonwebtoken");

const config = {
    secret: process.env.JWT_SECRET
};

exports.savePlan = (req, res) => {
    const {
        name,
        overview,
        location,
        price,
        minPrice,
        days,
        prequisites = [],
        inclusions = [],
        specialPlaces = [],
        photos = [],
        vlog = '',
        itinerary = []
    } = req.body;

    const token = req.headers['x-access-token'];
    let id = '';

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        id = decoded.id;
    });

    const plan = new Plan({
        name,
        overview,
        location,
        price,
        minPrice,
        days,
        prequisites,
        inclusions,
        specialPlaces,
        photos,
        vlog,
        itinerary,
        consultantId: id
    })

    try {
        plan.save((err) => {
            if (err) {
                res.status(500).send({ message: err })
                return;
            } else {
                res.status(200).send({ message: 'plan updated successfully' })
            }
        });
    } catch (error) {

    }
}