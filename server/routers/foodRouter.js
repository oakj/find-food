const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController.js');

router.post(
    '/', 
    foodController.addFood,
    (req, res) => {
        return res.status(200).send('food has been created!');
    }
);

router.get(
    '/:location', 
    foodController.getFood,
    (req, res) => {
        return res.status(200).json(res.locals.food);
    }
);

// patch updates only the data sent via post request (put updates entire row in db)
router.patch(
    '/:foodid', 
    foodController.updateFood,
    (req, res) => {
        return res.status(200).send('food has been updated!');
    }
);

router.delete(
    '/:foodid',
    foodController.deleteFood,
    (req, res) => {
        return res.status(200).send('food has been deleted!');
    }
);

module.exports = router;