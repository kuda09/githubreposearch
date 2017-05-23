const express = require('express');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');





const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.post("/authenticate", (req, res) => {

    request.post('https://github.com/login/oauth/access_token', req.body, function (err, response, body) {

        res.send(body);
    })
})



// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8888, () => console.log(`Server running on port 8888`)) ;
