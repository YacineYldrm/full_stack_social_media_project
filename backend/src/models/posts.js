const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        userId: {},
        tags: [{ type: String }],
        reactions: { type: Number },
    },
    { collection: "posts", timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = {
    Post,
};
