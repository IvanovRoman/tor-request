var express = require('express')
var app = express()

var tr = require('tor-request')

tr.setTorAddress('tor', 9050);

tr.request('https://api.ipify.org', function (err, res, body) {
  if (err) console.log(err);
  if (!err && res.statusCode == 200) {
    console.log("Your public (through Tor) IP is: " + body);
  }
});

var port = 8080
var server = require('http').createServer(app)
server.listen(port, function () {
  console.log('Server listening on port *:' + port)
})