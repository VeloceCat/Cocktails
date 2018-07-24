const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const routes = require("./routes/routes.js")(app);

const server = app.listen(config.PORT, function () {
    console.log('Listening on port %s...', server.address().port);
});