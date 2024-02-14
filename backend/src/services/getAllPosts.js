const blogDataDAO = require("../data-access/index");

const getAllPosts = async (postTag, userId) => {
    const blogPosts = await blogDataDAO.getAllPosts();

    const filteredPosts = blogPosts
        .filter((post) => {
            if (postTag === undefined) {
                return true;
            } else {
                return post.tags.includes(postTag);
            }
        })
        .filter((post) => {
            if (userId === undefined) {
                return true;
            } else {
                return post.userId.toString() === userId;
            }
        });
    return filteredPosts;
};

module.exports = {
    getAllPosts,
};
