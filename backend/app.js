const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

// add middleware cors
app.use(cors());

// add middleware url encoded
app.use(
    express.urlencoded({
        extended: true,
})
);

// add middleware json
app.use(express.json());


// Create API

app.get('/users', (req, res) => {
    controller.getUser(users => {
        res.send(users);
    });
});

app.get('/user', (req, res) => {
    const id = req.query.id;
    controller.getUserById(id, user => {
        res.send(user);
    });
});


module.exports = app;