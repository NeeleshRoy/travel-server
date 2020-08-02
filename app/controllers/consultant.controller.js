const db = require("../models");
const Consultant = db.consultant;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.consultantBoard = async (req, res) => {
    try {
        const results = await Consultant.findOne({ _id: req.userId });
        if (results && results.password) {
            delete results.password;
            delete results._id;
            delete results.__v;
            res.status(200).send(results);
        }
    } catch (error) {
        res.status(400).send({ message: "you are trying to get a wrong consultant" });
    }
};

exports.adminBoard = async (req, res) => {
    try {
        const admin = await Consultant.findOne({ _id: req.userId });
        if (admin && admin.password) {
            delete admin.password;
            delete admin._id;
            delete admin.__v;
            res.status(200).send(admin);
        }
    } catch (error) {
        res.status(400).send({ message: "you are trying to get a wrong admin" });
    }
};