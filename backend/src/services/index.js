const { getAllPosts } = require("../services/getAllPosts");
const { getUsers } = require("../services/getUsers");
const { addPost } = require("./addPost");
const { deletePost } = require("./deletePost");
const { addReaction } = require("./addReaction");

module.exports = blogDataServices = {
    getUsers,
    getAllPosts,
    addPost,
    deletePost,
    addReaction,
}