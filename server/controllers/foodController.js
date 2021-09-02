const { v4: uuidv4 } = require('uuid');
const db = require('../../db/db.js');
const foodController = {};

// create new google maps client (needed to make requsts to google maps api)
const googleMapsClient = require('@google/maps').createClient({
    key: process.env.GOOGLE_MAPS_API_KEY,
    // Promise property is required below to use .asPromise() syntax when making a request to google maps api
    Promise: Promise
});

foodController.addFood = (req, res, next) => {
    // generate food id using uuid
    const foodid = uuidv4();
    // get data from req.body
    const { name, cost, restaurant_name, restaurant_address, restaurant_city, restaurant_state, restaurant_zip, featured_on, streaming_on, food_img_url } = req.body;
    // create values array for db query
    const values = [foodid, name, cost, restaurant_name, restaurant_address, restaurant_city, restaurant_state, restaurant_zip, featured_on, streaming_on, food_img_url];
    // create db query
    const query = `
        INSERT INTO food (_id, name, cost, restaurant_name, restaurant_address, restaurant_city, restaurant_state, restaurant_zip, featured_on, streaming_on, food_img_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
    db.query(query, values)
        .then(response => {
            console.log('addFood response', response);
            return next();
        })
        .catch(error => {
            console.log('addFood error:\n', error);
            return next({
                log: error,
                message: error
            })
        })
}

foodController.getFood = async (req, res, next) => {
    console.log('we enter foodController.getFood');
    // deconstruct (for sanitization) req.params to get location
    const { location } = req.params;
    // console.log('req.params', req.params);
    // query db for food nearby
    const values = [location];
    const query = `
        SELECT *
        FROM food
        WHERE restaurant_city = $1`;
    await db.query(query, values)
        .then(response => {
            // console.log('res.rows', response.rows);
            res.locals.food = response.rows;
            console.log('getFood response.rows[0]', res.locals.food[0]);
            return next();
        })
        .catch(error => {
            return next({
                log: error,
                message: error
            });
        })
    // make request to google maps api
    // console.log('when does this happen?');
    // await googleMapsClient.geocode({ address: location  }).asPromise()
    //     .then(res => {
    //         console.log('google maps res:\n', res.json);
    //         return res.json();
    //     })
    //     .then(data => {
    //         console.log('google maps data:\n', data.results);
    //     })
    //     .catch(error => next({
    //         log: error,
    //         message: { err: error }
    //     }))
}

foodController.updateFood = (req, res, next) => {
    // get id of food to be updated from req.params
    const { foodid } = req.params;
    console.log('foodid', foodid);
    // get new data to update the existing data with, from req.body (not allowing update on _id)
    // in the frontend, have to make sure to include all properties of the food even if it's not being updated for this code to work properly
    const { name, cost, restaurant_name, restaurant_address, restaurant_city, restaurant_state, restaurant_zip, featured_on, streaming_on, food_img_url } = req.body;
    console.log('req.body', req.body);
    // query db to update
    const values = [name, cost, restaurant_name, restaurant_address, restaurant_city, restaurant_state, restaurant_zip, featured_on, streaming_on, food_img_url, foodid];
    const query = `
        UPDATE food
        SET name=$1, cost=$2, restaurant_name=$3, restaurant_address=$4, restaurant_city=$5, restaurant_state=$6, restaurant_zip=$7, featured_on=$8, streaming_on=$9, food_img_url=$10
        WHERE _id=$11`;
    // make db query...
    db.query(query, values)
        .then(response => {
            console.log('update response success', response);
            return next();
        })
        .catch(error => {
            console.log('error', error);
            return next({
                log: error,
                message: error
            });
        })
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