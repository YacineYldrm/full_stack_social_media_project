const express = require("express");
const blogDataCtrl = require("../controller");
const { createToken } = require("../jwt/createToken");
const { User } = require("../models/users");
const { refreshToken } = require("../jwt/refreshToken");

const userDataRouter = express.Router();

userDataRouter.get("/refreshToken", async (req, res) => {
    try {
        const [authType, token] = req.headers.authorization.split(" ");
        const newAccessToken = await refreshToken(token);
        res.json({ succsess: true, newAccessToken: newAccessToken });
    } catch (error) {
        res.json({ success: false, error: error });
    }
});

userDataRouter.post("/login", express.json(), async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) throw new Error("User doesn't exist");
    const accessToken = createToken(user);
    const refreshToken = createToken(user, "refresh");
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        signed: true,
        secure: true,
        path: "/",
    });
    res.json({
        success: true,
        tokens: {
            accessToken,
            // refreshToken,
        },
    });
});

userDataRouter.get("/", blogDataCtrl.getUserDataCtrl);

module.exports = {
    userDataRouter,
};
