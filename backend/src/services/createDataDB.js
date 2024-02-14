const { readJsonFile } = require("../data-access/filesystem");
const { Post } = require("../models/posts");
const { User } = require("../models/users");
const crypto = require("crypto");
const mongoose = require("mongoose");

// generate passwordSalt
// create passwordHash from users password

const hash = (password) => {
    const hashedPassword = crypto
        .createHash("sha512")
        .update(password)
        .digest("hex");
    return hashedPassword;
};

const generateRandomSalt = () => {
    const salt = crypto.randomBytes(64).toString("base64");
    return salt;
};

const passwordHash = (password, passwordSalt) => {
    return hash(`${password}${passwordSalt}`);
};

// update Userdata --> delete: password --> insert: passwordSalt: passwordSalt, passwordHash: passwordHash
// create DataBase
const createDataDB = async (filePath) => {
    const data = await readJsonFile(filePath);
    const updatedUserData = data.map((user) => {
        const salt = generateRandomSalt();
        delete user.password;
        return {
            ...user,
            passwordHash: passwordHash(user.password, salt),
            passwordSalt: salt,
        };
    });
    await Post.insertMany(data);
};

module.exports = {
    createDataDB,
};
