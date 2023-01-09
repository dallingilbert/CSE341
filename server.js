var express = require('express');
var app = express();

app.get('/', require('./routes/index'));


app.listen(3000, () => {
    console.log('Server running on port 3000');
})