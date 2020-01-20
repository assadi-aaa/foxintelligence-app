const express = require('express');
const path = require('path');
const app = express();
const http = require("http");
const server = http.createServer();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(4002);
