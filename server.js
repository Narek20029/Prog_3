var express = require('express');
var app = express();

var PORT = process.env.port || 3000

app.use('/',express.static('.'));

app.listen(PORT,()=>{console.log("connected on port " + PORT)})