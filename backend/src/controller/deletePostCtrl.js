const blogDataServices = require("../services");

const deletePostCtrl = async (req, res) => {
    try {
        const updatedBlogContent = await blogDataServices.deletePost(
            req.params.postId
        );
        res.json({ success: true, result: updatedBlogContent });
    } catch (err) {
        res.json({ success: false, error: err });
    }
};

module.exports = {
    deletePostCtrl,
};
