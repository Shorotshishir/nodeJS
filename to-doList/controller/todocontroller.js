var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://test:test@ds245615.mlab.com:45615/todo');

//create scema - blueprint of data
var todoSchema = new mongoose.Schema({
    item: String
});

// a to do model
var Todo = mongoose.model('Todo',todoSchema);
var itemOne = Todo({item:'get flowers'}).save(function(err){
    if (err) throw err;
    console.log('item saved');
});

var data = [
    {item:'get milk'},
    {item: 'walk dog'},
    {item: 'start programming'}
];
var urlencodedParser = bodyParser.urlencoded({extended:false});
module.exports = function(app){
    
    app.get('/todo',function(req,res){
        res.render('todo',{todos: data});
    });

    app.post('/todo',urlencodedParser,function(req,res){
        data.push(req.body);
        res.json(data);
        // res.render('todo',{todos: data});
    });

    app.delete('/todo/:item',function(req,res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !==req.params.item;
        });
        // res.render('todo',{todos:data});
        res.json(data);
    })
};