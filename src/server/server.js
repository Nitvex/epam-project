const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

/*Constants*/
const masters = require("./constants/masters");
let users = require("./constants/users");
const times = require("./constants/times");
const places = require("./constants/places");
const locations = require("./constants/locations");
let userAppointments = require("./constants/userAppointments");


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.get('/account', function (req, res) {
    const infoForAppointment = {
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
    const {username, id, date, time, place, master} = req.query;
    userAppointments.push({username, id, date, time, place, master});
    res.json({status: "ok"});
});

app.post('/authenticate', function (req, res) {
    if (!req.query) {
        return res.sendStatus(400)
    }
    let found = false;
    for (const user of users) {
        if ((user.username === req.query.username) &&
            (user.password === req.query.password)) {
            found = true;
            break;
        }
    }
    found ? res.json({status: "ok"}) : res.json({status: "not_found"});
});


app.get('/getappointments', function (req, res) {
    if (!req.query) {
        return res.sendStatus(400)
    }
    let appointments = [];
    userAppointments.forEach((u) => {
        if (u.username === req.query.username) {
            appointments.push({
                id: u.id,
                date: u.date,
                time: u.time,
                place: u.place,
                master: u.master
            });
        }

    });
    res.send(appointments);
});

app.delete('/cancelappointment', function (req, res) {
    if (!req.query) {
        return res.sendStatus(400)
    }
    const {username, id} = req.query;
    userAppointments.forEach((appointment, index) => {
        if ((appointment.username.toString() === username) && (appointment.id.toString() === id)) {
            userAppointments.splice(index, 1);
        }
    });
    res.json({status: "ok"});
});


app.listen(3000, function () {
    console.log("App is listening on 3000 port");
});

