const express = require('express');
const path = require('path');

const app = express();

// need to serve bundled files (static) from server to prevent CORS
app.use('/build', express.static(path.resolve(__dirname, '../build')));
// need to serve static html file from server to prevent CORS
app.get('/', (req, res) => {
    console.log('this happens');
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(3000, () => {
    console.log(`listening on port 3000`);
})