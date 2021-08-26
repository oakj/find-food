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

foodController.updateFood = (req, res, next) => {
    // get id of food to be updated from req.params
    const { foodid } = req.params;
    // get new data to update the existing data with, from req.body (not allowing update on _id)
    // in the frontend, have to make sure to include all properties of the food even if it's not being updated for this code to work properly
    const { name, cost, restaurant_name, restaurant_address, restaurant_city, restaurant_state, restaurant_zip, featured_on, streaming_on, food_img_url } = req.body;
    // query db to update
    const values = [name, cost, restaurant_name, restaurant_address, restaurant_city, restaurant_state, restaurant_zip, featured_on, streaming_on, food_img_url, foodid];
    const query = `
        UPDATE food
        SET name=$1, cost=$2, restaurant_name=$3, restaurant_address=$4, restaurant_city=$5, restaurant_state=$6, restauant_zip=$7, featured_on=$8, streaming_on=$9, food_img_url=$10
        WHERE _id=$11`;
    // make db query...
}

foodController.deleteFood = (req, res, next) => {
    // get id of food to be deleted from req.params
    const { foodid } = req.params;
    // query db to delete
    const values = [foodid];
    const query = `DELETE FROM food WHERE _id = $1;`;
    db.query(query, values)
        .then(response => {
            console.log('deleted food:\n', response);
            return next();
        })
        .catch(error => {
            return next({ 
                log: error, 
                message: error 
            });
        });
}

module.exports = foodController;