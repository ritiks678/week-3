const jwt = require("jsonwebtoken");

exports = {};

exports.getToken = async (email, user) => {
    // Assume this code is complete
    const token = Jwt.sign({identifier: user._id}, "thiskeyIsSupportedToBeSecret");
    return token;

};


module.exports = exports;