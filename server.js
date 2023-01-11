const express = require('express');
const app = express();
const mongodb = require('./db/connection');

app.get('/', require('./routes/index'));

mongodb.initDb((err, mongodb ) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MongoDB successfully!');
        app.listen(3000, () => console.log('Server running on port 3000'));
    }
});