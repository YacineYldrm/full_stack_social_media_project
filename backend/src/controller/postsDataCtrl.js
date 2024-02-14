const blogDataServices = require("../services");

const postsDataCtrl = async (req, res) => {
    try {
        const filteredPosts = await blogDataServices.getAllPosts(
            req.query.tag,
            req.query.userId
        );
        res.json({ success: true, result: filteredPosts });
    } catch (err) {
        res.json({ success: false, error: err });
    }
};
module.exports = {
    postsDataCtrl,
};
