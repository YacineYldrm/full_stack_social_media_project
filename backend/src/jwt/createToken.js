const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const secretKey = process.env.SECRET_KEY;

const createToken = (user, tokenType = "access") => {
    const expiresIn =
        {
            access: "1h",
            refresh: "1d",
        }[tokenType] || "10min";

    const token = jwt.sign({ sub: user._id, typ: tokenType }, secretKey, {
        expiresIn,
    });

    return token;
};

module.exports = {
    createToken,
};
