const express = require('express');
const app = express();
const cors = require('cors');

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


module.exports = app;