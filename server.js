const express = require('express');
const app = express();
const db = require('./db/connection');

app.get('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
    db.connectDB();
})