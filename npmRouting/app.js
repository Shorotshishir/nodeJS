var express =require('express');
var bodyParser =require('body-parser');

var app = express();
var urlEncodedParser= bodyParser.urlencoded({ extended:false})
app.use('/assets',express.static('assets'));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');
});

// app.get('/contact',function(req,res){
//     res.sendFile(__dirname+'/contact.html');
// });

// app.get('/contact',function(req,res){
//     res.render('contact');
// });


app.get('/contact',function(req,res){

    res.render('contact',{qs:req.query});
});

app.post('/contact',urlEncodedParser,function(req,res){
    // res.render('contact',{qs:req.query});
    console.log(req.body);
    res.render('contact-success',{data:req.body});
});

app.get('/profile/:name',function(req,res){
    var data = {age:29, job:'designer',hobbies:['eating','gaming','sketching']};
    res.render('profile', {person: req.params.name, data:data});
});
app.listen(3000);
