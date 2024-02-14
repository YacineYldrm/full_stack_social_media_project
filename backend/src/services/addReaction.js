const blogDataDAO = require("../data-access/");

const addReaction = async (postID) => {
    const updatedPost = await blogDataDAO.addReaction(postID);
    return updatedPost;
};

module.exports = {
    addReaction,
};
