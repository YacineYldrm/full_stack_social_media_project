const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const secretKey = process.env.SECRET_KEY;

module.exports.doJWTAuth = (req, res, next) => {
    try {
        const [authType, token] = req.headers.authorization.split(" ");
        const verifiedToken = jwt.verify(token, secretKey);
        if (!verifiedToken || authType !== "Bearer")
            throw new Error("Invalid authantication");
        next();
    } catch (error) {
        res.json({ success: false, error: error });
    }
};
