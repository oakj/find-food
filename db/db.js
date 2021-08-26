// Pool is a queue of db queries that also keeps the db connection alive and caches all recent queries
const { Pool } = require('pg');

const PG_URI = 'postgres://lkmuiupg:NJoX43Jk0jnaNfu_Is4sRb3SReKJB6Wk@kashin.db.elephantsql.com/lkmuiupg';

// create a new pool instance of the Pool class and pass in the db url above
const pool = new Pool({
    connectionString: PG_URI
});

// create object of exports from this file
module.exports = {
// add as a property to the exported object...
    // query is a property, value is a function that takes text, params, and callback as params
    // function returns the result of invoking query method on pool object (adding a SQL query to the pool and returning the result of the query)
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text,params, callback);
    }
};