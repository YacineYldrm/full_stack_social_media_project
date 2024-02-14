const blogDataDAO  = require("../data-access");

const getUsers = async () => {
    const allUsers = blogDataDAO.getAllUserData();
    return allUsers;
}

module.exports = {
    getUsers
}