require('dotenv').config();
var express = require('express');
var app = express();
var open = require('openurl');

app.get('/google', function(req, res) {
    var display = req.param('display');
    console.log(display);
    open.open('https://www.google.com/search?q=' + display);
});

app.get('/wiki', function(req, res) {
    var display = req.param('display');
    console.log(display);
    open.open('https://en.wikipedia.org/wiki/' + display);
});

app.get('/image', function(req, res) {
    var display = req.param('display');
    console.log(display);
    open.open('https://www.google.com/search?hl=en&site=imghp&tbm=isch&source=hp&biw=1279&bih=676&q=' + display);
});

app.listen(3000, function () {
    console.log('Started on localhost:3000');
});