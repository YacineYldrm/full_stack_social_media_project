const blogDataServices = require("../services");

const addReactionCtrl = async (req, res) => {
    try {
        const updatedBlogContent = await blogDataServices.addReaction(
            req.params.postID
        );
        res.json({ success: true, result: updatedBlogContent });
    } catch (err) {
        console.log(err);
        res.json({ success: false, error: err });
    }
};

module.exports = {
    addReactionCtrl,
};
