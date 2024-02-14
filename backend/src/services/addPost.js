const { readJsonFile, writeJsonFile } = require("../data-access/filesystem");

const addPost = async (body) => {
    const newPostTitle = body.title;
    const newPostBody = body.body;
    const newPostTags = body.tags;

    const newPost = {
        id: Date.now(),
        title: newPostTitle,
        body: newPostBody,
        userId: Date.now(),
        tags: ["history", "american", "crime"],
        reactions: 0,
    };

    const allPosts = await readJsonFile("./posts.json");
    const updatedBlogContent = [...allPosts, newPost];
    await writeJsonFile("./posts.json", updatedBlogContent);

    return updatedBlogContent;
};

module.exports = {
    addPost,
};
