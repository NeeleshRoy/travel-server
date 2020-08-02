const db = require("../models");
const Consultant = db.consultant;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const config = {
    secret: process.env.JWT_SECRET
};

exports.signup = (req, res) => {
    const {
        email,
        firstname,
        lastname,
        primaryPhone,
        travelXp,
        primaryPlaces,
        password,
        about = '',
        plans = [],
        profession = '',
        profilePicture = '',
        social = [],
        tags = [],
        ratings = 0.0,
        reviews = []
    } = req.body;
    const consultant = new Consultant({
        email,
        firstname,
        lastname,
        primaryPhone,
        travelXp,
        primaryPlaces,
        password: bcrypt.hashSync(password, 10),
        about,
        plans,
        profession,
        profilePicture,
        social,
        tags,
        ratings,
        reviews
    })

    consultant.save((err, consultant) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (req.body.roles) {
            Role.find(
                {
                    name: { $in: req.body.roles }
                },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    consultant.roles = roles.map(role => role._id);
                    consultant.save(err => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        res.send({ message: "Consultant was registered successfully!" });
                    });
                }
            );
        } else {
            Role.findOne({ name: "consultant" }, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                consultant.roles = [role._id];
                consultant.save(err => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    res.send({ message: "User was registered successfully!" });
                });
            });
        }
    });
}

exports.signin = (req, res) => {
    Consultant.findOne({
        email: req.body.email
    })
        .populate("roles", "-__v")
        .exec((err, consultant) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!consultant) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                consultant.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: consultant.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = [];

            for (let i = 0; i < consultant.roles.length; i++) {
                authorities.push("ROLE_" + consultant.roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: consultant._id,
                username: consultant.username,
                email: consultant.email,
                roles: authorities,
                accessToken: token
            });
        });
};