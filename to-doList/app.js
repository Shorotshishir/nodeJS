var express = require('express');
var todocontroller = require('./controller/todocontroller');
var app = express();
// set up template engine
app.set('view engine', 'ejs');

//static file
app.use(express.static('./public'));

//listen to port
app.listen(3000);
console.log('you are listening to port 3000');

//fire controller
todocontroller(app);