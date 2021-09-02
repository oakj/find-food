const express = require('express');
const path = require('path');

const app = express();

// require dotenv to use .env with process.env
require('dotenv').config()

// require routers here
const userRouter = require('./routers/userRouter.js');
const foodRouter = require('./routers/foodRouter.js');

// boilerplate: handle parsing of request body for POST/PATCH/UPDATE requests
app.use(express.json());
// boilerplate: handle parsing of urlencoded requsts
app.use(express.urlencoded());

// need to serve bundled files (static) from server to prevent CORS
app.use('/build', express.static(path.resolve(__dirname, '../build')));
// need to serve static html file from server to prevent CORS
app.get('/', (req, res) => {
    console.log('this happens');
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// all routers should go here (after handling of json and encoded urls, sending of static files and before 404/global error handling)
app.use('/users', userRouter);
app.use('/food', foodRouter);

// boilerplate: 404 catch all handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// boilerplate: global error object
const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' }
};
// boilerplat: express knows this is the global error handler because of the 4 params
app.use((err, req, res, next) => {
    const errorObj = Object.assign(defaultError, err);
    return res.status(errorObj.status).send(errorObj.message);
});

app.listen(3000, () => {
    console.log(`listening on port 3000`);
})