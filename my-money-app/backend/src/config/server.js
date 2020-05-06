const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors')
const querypParser = require('express-query-int')

const port = 3000;

const server = express();

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(querypParser())

server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`);
})

module.exports = server;
