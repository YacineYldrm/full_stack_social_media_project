const { getAllPosts, addReaction } = require("./postsDataDAO.js");
const { getAllUserData } = require("./userDataDAO.js");

module.exports = blogDataDAO = {
    getAllUserData,
    getAllPosts,
    addReaction,
};
