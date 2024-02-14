const { User } = require("../models/users.js");

const getAllUserData = async () => {
    const userData = await User.find();
    return userData;
};

// TODO: saveAllUser (adding new user)???

module.exports = {
    getAllUserData,
};
