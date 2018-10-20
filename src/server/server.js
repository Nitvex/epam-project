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


/*Array to store records*/
let userRecords = [
    {
        username: 'user',
        id: 1,
        time: "11:00",
        place: "Hello 17",
        master: "Jeff"
    },
    {
        username: 'user',
        id: 2,
        time: "12:00",
        place: "Hello 18",
        master: "Jeff"
    },
    {
        username: 'user',
        id: 3,
        time: "13:00",
        place: "Hello 19",
        master: "Jeff"
    },
    {
        username: 'admin',
        id: 1,
        time: "12:00",
        place: "Hello 18",
        master: "Larry"
    },
    {
        username: 'admin',
        id: 2,
        time: "13:00",
        place: "Hello 19",
        master: "Larry"
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


app.post('/records', function (req, res) {
    if ((!req.body) || (!req.query)) {
        return res.sendStatus(400)
    }
    console.log("/records requested");
    let {username, id, time, place, master} = req.query;
    userRecords.push({username, id, time, place, master});
    console.log(userRecords);
    res.send(JSON.stringify({status: "ok"}));
});

app.post('/authenticate', function (req, res) {
    if ((!req.body) || (!req.query)) {
        return res.sendStatus(400)
    }
    console.log("/authenticate requested");
    let found = false;
    for (let user of users) {
        if ((user.username === req.query.username) &&
            (user.password === req.query.password)) {
            found = true;
            break;
        }
    }
    found ? res.send(JSON.stringify({status: "ok"})) : res.send(JSON.stringify({status: "not_found"}));
});


app.post('/getrecords', function (req, res) {
    console.log("/getrecords requested");
    let records = [];
    userRecords.forEach((u) => {
        if (u.username === req.query.username) {
            records.push({
                id: u.id,
                time: u.time,
                place: u.place,
                master: u.master
            });
        }

    });
    res.send(records);
});

app.post('/declinerecord', function (req, res) {
    console.log("/declinerecord requested");
    let {username, id} = req.query;
    userRecords.forEach((record, index) => {
        if ((record.username.toString() === username) && (record.id.toString() === id)) {
            userRecords.splice(index, 1);
        }
    });
    res.send(JSON.stringify({status: "ok"}));
});


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

