var express =require('express');

var app = express();

app.use('/assets',express.static('assets'));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');
});

// app.get('/contact',function(req,res){
//     res.sendFile(__dirname+'/contact.html');
// });

app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/profile/:name',function(req,res){
    var data = {age:29, job:'designer',hobbies:['eating','gaming','sketching']};
    res.render('profile', {person: req.params.name, data:data});
});
app.listen(3000);
