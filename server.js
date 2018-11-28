
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

var stats=fs.readFileSync('stats.json');

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});

io.on('connection', function (socket) {
    socket.on("handleStats", function (data) {
        stats=data;
        fs.writeFileSync('stats.json',JSON.stringify(stats));
    });
 });
 
 app.get('/statistics',function(req,res){
     if(stats.fps){
     res.send('<h1> fps -'+stats.fps+'</h1>  <h2> xotaker -'+stats.xotakerP+'</h2> <h2> gishatich -'+stats.gishatichP+'</h2> <h2> dinozavr -'+stats.dinozavP+'</h2> <h2> exanak -'+stats.exanakP+'</h2> <h2> xot -'+stats.xot+'</h2>');
     }else{
         res.send('');
     }
     console.log(stats);
 })

server.listen(3000);