const { body } = require('express-validator');
const blogDataServices = require('../services')
const { validationResult } = require('express-validator');

const addPostCtrl = async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if(errors.errors.length === 0){
        try{
            const updatedBlogContent = await blogDataServices.addPost(req.body);
            res.json({success: true, result: updatedBlogContent});
        }catch(err){
            res.json({success: false, error: err});
        }
    } else{
        res.json({success: false, error: "No valid data!"})
    };
};

module.exports = {
    addPostCtrl
}