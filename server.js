var express = require('express'),
    http = require('http'),
    request = require('request');

var app = express();

app.use(express.static(__dirname + '/client'));

app.all('/proxy', function(req, res) {
    var url = req.header('SalesforceProxy-Endpoint');
    console.log("proxying: " + url);
    request({ url: url, method: req.method, json: req.body, headers: {'Authorization': req.header('X-Authorization')} }).pipe(res);
});

console.log('Listening on port 3000...');
http.createServer(app).listen(3000);
