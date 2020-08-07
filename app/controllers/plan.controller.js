const _ = require('lodash');
const mongoose = require('mongoose');
const db = require("../models");
const Plan = db.plan;
const Consultant = db.consultant;

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
        plan.save((err, plan) => {
            if (err) {
                res.status(500).send({ message: err })
                return;
            } else {
                Consultant.findById(mongoose.Types.ObjectId(id), (err, consultant) => {
                    if (err) {
                        res.status(500).send({ message: err })
                    } else {
                        consultant.plans.push(plan.id);
                        consultant.save((err => {
                            if (err) {
                                res.status(500).send({ message: err })
                            } else {
                                res.status(200).send({ message: 'plan updated successfully' })
                            }
                        }))
                    }
                });
            }
        });
    } catch (error) {

    }
}

exports.getPlans = (req, res) => {
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

    try {
        Consultant.findById(id, (err, consultant) => {
            if (err) {
                res.status(500).send({ message: err })
            } else {
                const planIds = consultant.plans.map(planId => {
                    return mongoose.Types.ObjectId(planId);
                })

                Plan.find({
                    '_id': { $in: planIds }
                }, function (err, plans) {
                    if (err) {
                        res.status(500).send({ message: err });
                    } else {
                        res.status(200).send(plans);
                    }
                });
            }
        })
    } catch (error) {

    }
}

exports.editPlan = (req, res) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
    });

    const cleaned = _.pickBy(req.body, _.identity);
    const planId = req.params.id;

    Plan.findByIdAndUpdate(planId, cleaned, (err, success) => {
        if (err) {
            res.status(500).send({ message: err })
        } else {
            res.status(200).send({ message: success });
        }
    })
}

exports.deletePlan = (req, res) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
    });

    const planId = req.params.id;

    Plan.findByIdAndDelete(planId, (err, deleted) => {
        if (err) {
            res.status(404).send({ message: err })
        } else {
            res.status(200).send({ message: "successfully deleted" });
        }
    })
}