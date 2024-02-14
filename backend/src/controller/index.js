const { addPostCtrl } = require("./addPostCtrl");
const { addReactionCtrl } = require("./addReactionCtrl");
const { deletePostCtrl } = require("./deletePostCtrl");
const { postsDataCtrl } = require("./postsDataCtrl");
const { getUserDataCtrl } = require("./userDataCtrl");


module.exports = blogDataCtrl = {
    getUserDataCtrl,
    postsDataCtrl,
    addPostCtrl,
    addReactionCtrl,
    deletePostCtrl
}