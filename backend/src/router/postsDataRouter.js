const express = require("express");
const blogDataCtrl = require("../controller");
const { body } = require("express-validator");
const { doJWTAuth } = require("../jwt/doJWTAuth");

const postsDataRouter = express.Router();
postsDataRouter.use(express.json());

postsDataRouter.get("/", blogDataCtrl.postsDataCtrl);

postsDataRouter.post(
    "/",
    body("title").notEmpty().isString().isAlphanumeric(),
    body("body").notEmpty().isString().isAlphanumeric(),
    blogDataCtrl.addPostCtrl
); //

postsDataRouter.patch(
    "/addReaction/:postID",
    doJWTAuth,
    blogDataCtrl.addReactionCtrl
);

postsDataRouter.delete("/delete/:postID", blogDataCtrl.deletePostCtrl);

module.exports = {
    postsDataRouter,
};
