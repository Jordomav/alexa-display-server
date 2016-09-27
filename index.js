var express = require('express');
var app = express();
var open = require('openurl');

app.get('/show', function(req, res) {
    var display = req.param('display');
    console.log(display);
    res.send('Showing the user '  + display);
    open.open('https://www.google.com/search?q=' + display);
});

app.listen(3000, function () {
    console.log('Started on localhost:3000');
});