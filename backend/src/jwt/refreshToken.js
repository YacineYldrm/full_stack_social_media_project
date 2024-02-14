const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { createToken } = require("./createToken");
const { User } = require("../models/users");
dotenv.config();

const secretKey = process.env.SECRET_KEY;

module.exports.refreshToken = async (refreshToken) => {
    const verifiedToken = jwt.verify(refreshToken, secretKey);
    if (verifiedToken.typ !== "refresh")
        throw new Error("Expected refresh token");
    const user = await User.findById(verifiedToken.sub);
    const newAccessToken = createToken(user);
    return newAccessToken;
};
