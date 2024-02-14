const blogDataServices = require('../services')

const getUserDataCtrl = async (_, res) => {
    try{
        const allUsers = await blogDataServices.getUsers();
        res.json({success: true, result: allUsers});
    } catch(err) {
        res.status(500).json({success: false, error: err});
    }
}

module.exports = {
    getUserDataCtrl
}