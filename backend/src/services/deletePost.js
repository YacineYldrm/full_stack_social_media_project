const blogDataDAO = require("../data-access/");

const deletePost = async (postId) => {
    const updatedBlogContent = await blogDataDAO.deletOneById(postId);
    return updatedBlogContent;
};

module.exports = {
    deletePost,
};
