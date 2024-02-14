const { Post } = require("../models/posts");
const { User } = require("../models/users");

// get all Posts
// get all Users
// if post.userId matches user.id
// update post.userId to user._id

const updatePostUserId = async () => {
    const posts = await Post.find();

    const updatedPostData = posts.map(async (post) => {
        const user = await User.findOne({ id: post.userId });
        const postObj = post.toObject();
        const postId = post._id;
        delete postObj._id;
        const newPost = { ...postObj, userId: user._id.toString() };
        console.log(newPost);
        await Post.findOneAndReplace({ _id: postId }, newPost);
    });
};

module.exports = {
    updatePostUserId,
};
