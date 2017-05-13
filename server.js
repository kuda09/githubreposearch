const express = require('express');
const path = require('path');


const app = express();


app.use(express.static(__dirname + '/dist'));



// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8888, () => console.log(`Server running on port 8888`)) ;
