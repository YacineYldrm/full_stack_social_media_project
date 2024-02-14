const { default: mongoose } = require("mongoose");
const { Post } = require("../models/posts");

const getAllPosts = async () => {
    const allPosts = await Post.find();
    return allPosts;
};

const addReaction = async (postId) => {
    await Post.findByIdAndUpdate(postId, {
        $inc: { reactions: 1 },
    });
    const updatedBlogContent = await Post.find();
    return updatedBlogContent;
};

const deleteOneById = async (postId) => {
    await Post.findByIdAndDelete(postId);
    return await Post.find();
};

module.exports = {
    getAllPosts,
    addReaction,
    deleteOneById,
};
