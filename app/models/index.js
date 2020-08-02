const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.consultant = require("./consultant.model");
db.role = require("./role.model");

db.ROLES = ["consultant", "admin"];

module.exports = db;