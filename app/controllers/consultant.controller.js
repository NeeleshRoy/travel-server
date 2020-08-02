exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.consultantBoard = (req, res) => {
    res.status(200).send("Consultant Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};