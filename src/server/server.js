let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

/*Constants*/
let masters = require("./constants/masters");
let users = require("./constants/users");
let times = require("./constants/times");
let places = require("./constants/places");
let locations = require("./constants/locations");
let userAppointments = require("./constants/userAppointments");


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/account', function (req, res) {
    let infoForAppointment = {
        masters, times, places
    };
    res.send(infoForAppointment);
});

app.get('/locations', function (req, res) {
    res.send(locations);
});


app.post('/makeappointment', function (req, res) {
    if (!req.query) {
        return res.sendStatus(400)
    }
    let {username, id, time, place, master} = req.query;
    userAppointments.push({username, id, time, place, master});
    res.send(JSON.stringify({status: "ok"}));
});

app.post('/authenticate', function (req, res) {
    if (!req.query) {
        return res.sendStatus(400)
    }
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


app.post('/getappointments', function (req, res) {
    if (!req.query) {
        return res.sendStatus(400)
    }
    let appointments = [];
    userAppointments.forEach((u) => {
        if (u.username === req.query.username) {
            appointments.push({
                id: u.id,
                time: u.time,
                place: u.place,
                master: u.master
            });
        }

    });
    res.send(appointments);
});

app.post('/cancelappointment', function (req, res) {
    if (!req.query) {
        return res.sendStatus(400)
    }
    let {username, id} = req.query;
    userAppointments.forEach((appointment, index) => {
        if ((appointment.username.toString() === username) && (appointment.id.toString() === id)) {
            userAppointments.splice(index, 1);
        }
    });
    res.send(JSON.stringify({status: "ok"}));
});


app.listen(3000, function () {
    console.log("App is listening on 3000 port");
});

