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
    "John", "Jerry", "Larry", "Bill", "Shane", "Jenny", "Sally"
];

let times = [
    "10:00", "10:30",
    "11:00", "11:30",
    "12:00", "12:30",
    "13:00", "13:30",
    "14:00", "14:30",
    "15:00", "15:30",
    "16:00", "16:30",
    "17:00", "17:30",
    "18:00", "18:30",
    "19:00", "19:30",
    "20:00", "20:30",
    "21:00", "21:30",
];

let places = [
    "Pushinskaya 12", "8th Krasnoarmeyskaya 4/5",
    "Voskova 16", "Kirochnaya 9",
    "M. Dudina, 32 K1", "Moskovkiy pr. 6",
    "Prospekt Koroleva 2", "Pr. entuziastov, 33 K1"
];

let locations = [
    {
        location: "Pushinskaya 12",
        time: "Mon-San | 10:00 - 22:00",
        subway: "Mayakovskaya"
    },
    {
        location: "8th Krasnoarmeyskaya 4/5",
        time: "Mon-San | 11:00 - 22:00",
        subway: "Technologiskiy institut"
    },
    {
        location: "Voskova 16",
        time: "Mon-San | 10:00 - 22:00",
        subway: "Gor'kovskaya"
    },
    {
        location: "Kirochnaya 9",
        time: "Mon-San | 10:00 - 21:00",
        subway: "Chernyshevskaya"
    },
    {
        location: "M. Dudina, 32 K1",
        time: "Mon-San | 10:00 - 22:00",
        subway: "Parnas"
    },
    {
        location: "Moskovkiy pr. 6",
        time: "Mon-San | 10:00 - 22:00",
        subway: "Sadovaya"
    },
    {
        location: "Prospekt Koroleva 2",
        time: "Mon-San | 10:00 - 22:00",
        subway: "Pionerskaya"
    },
    {
        location: "Pr. entuziastov, 33 K1",
        time: "Mon-San | 10:00 - 22:00",
        subway: "Ladozhskaya"
    },
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
    let infoForRecord = {
        masters, times, places
    };
    res.send(infoForRecord);
});

app.get('/locations', function (req, res) {
    console.log("/main_page requested");
    res.send(locations);
});

app.post('/login', function (req, res) {
    console.log("/login requested");
    res.send();
});


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

