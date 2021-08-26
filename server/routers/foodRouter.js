const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController.js');

router.get(
    '/:location', 
    foodController.getFood,
    (req, res, next) => {
        return res.status(200).json(res.locals.food);
    }
);

module.exports = router;