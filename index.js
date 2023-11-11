const express = require('express');

const PORT = 3000;

const app = express(); // create a express server object 

const mylogger = (req, res, next) => {
    console.log("logging from middleware 1");
    next();// calls the next middleware
}

const extlogger = (req, res, next) => {
    console.log("logging from middleware 2");
    next();// calls the next middleware
}

app.get('/home', mylogger. extlogger, (request, response) => {
    // response.send("hi there, welcome to get");
    console.json("last middleware")
    response.json({
        message: "OK get"
    })
});

app.post('/home', (request, response) => {
    // response.send("hi there, welcome to post");
    response.json({
        message: "OK"
    })
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})