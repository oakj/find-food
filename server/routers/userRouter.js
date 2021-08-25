const userController = require('../controllers/userController.js');

app.post(
    '/users', 
    (req, res) => {
        console.log('users endpoint hit');
        // users middleware
        res.status(200).send('users endpoint hit');
    }
);