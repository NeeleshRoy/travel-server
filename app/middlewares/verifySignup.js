const db = require('../models');
const ROLES = db.ROLES;
const Consultant = db.consultant;

const checkDuplicateEmail = async (req, res, next) => {
    try {
        const result = await Consultant.findOne({ email: req.body.email });
        console.log(result);
        if (result._id) {
            res.status(400).send({ message: "email is already in use" })
        }
    } catch (error) {
        res.status(500).send({ message: error });
    }

    next();
}

const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist!`
                });
                return;
            }
        }
    }

    next();
};

const verifySignUp = {
    checkDuplicateEmail,
    checkRolesExisted
};

module.exports = verifySignUp;