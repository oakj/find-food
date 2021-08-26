const { v4: uuidv4 } = require('uuid');
const db = require('../../db/db.js');
const userController = {};

userController.createUser = (req, res, next) => {
    console.log('req.body', req.body);
    const { username, password, email } = req.body;
    // create new user in psql db
    const user_id = uuidv4();
    const values = [user_id, username, password, email];
    const query = `
        INSERT INTO users (uuid, username, password, email)
        VALUES ($1, $2, $3, $4);`;
    db.query(query, values)
        .then(res => {
            console.log(res);
            return next();
        })
        .catch(err => {
            return next({
                log: `ERROR: Error in db query to create user\n${err}.`,
                message: `ERROR: Error in db query to create user\n${err}.`
            });
        })
};

module.exports = userController;