let express = require("express");
let bodyParser = require("body-parser");
let path = require('path');

let app = express();

let jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));


let users = [
    {
        username: 'user',
        password: '12345'
    },
    {
        username: 'admin',
        password: '54321'
    },
    {
        username: 'anotherOne',
        password: '123321'
    }

];

let masters = [
    "John", "Jerry", "Larry"
];

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/account', function (req, res) {
    console.log("/account requested");
    res.send(masters);
});

app.post('/login', function (req, res) {
    console.log("/login requested");
    res.send();
});


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

