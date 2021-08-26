const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post(
    '/', 
    userController.createUser,
    (req, res) => {
        console.log('post request on /users endpoint hit');
        return res.status(200).send('user has been created');
    }
);

module.exports = router;