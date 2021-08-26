const { response } = require('express');
const { v4: uuidv4 } = require('uuid');
const db = require('../../db/db.js');
const foodController = {};

foodController.getFood = (req, res, next) => {
    // query db for food nearby
    const { location } = req.params;
    console.log('req.params', req.params);
    const values = [location];
    const query = `
        SELECT *
        FROM food
        WHERE restaurant_city = $1`;
    db.query(query, values)
        .then(response => {
            console.log('res', response);
            res.locals.food = response.rows;
            return next();
        })
        .catch(error => {
            return next({
                log: error,
                message: error
            });
        })
}

module.exports = foodController;