let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

/*Constants*/
let masters = require("./constants/masters").masters;
let users = require("./constants/users").users;
let times = require("./constants/times").times;
let places = require("./constants/places").places;
let locations = require("./constants/locations").locations;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/account', function (req, res) {
    console.log("/account requested");
    let infoForRecord = {
        masters, times, places
    };
    res.send(infoForRecord);
});

app.get('/locations', function (req, res) {
    console.log("/main_page requested");
    res.send(locations);
});

app.post('/authenticate', function (req, res) {
    console.log("/authenticate requested");
    let found = false;
    for (let user of users) {
        if ((user.username === req.query.username) &&
            (user.password === req.query.password)) {
            found = true;
            break;
        }
    }
    found ? res.end(JSON.stringify({status: "ok"})) : res.end(JSON.stringify({status: "not_found"}));
});


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

