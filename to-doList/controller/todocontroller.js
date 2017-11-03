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
// to add data via code

// var itemOne = Todo({item:'get flowers'}).save(function(err){
//     if (err) throw err;
//     console.log('item saved');
// });


// var data = [
//     {item:'get milk'},
//     {item: 'walk dog'},
//     {item: 'start programming'}
// ];

var urlencodedParser = bodyParser.urlencoded({extended:false});
module.exports = function(app){
    
    app.get('/todo',function(req,res){
        //get data from mongoDB
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{todos:data});
        });
        // res.render('todo',{todos: data});
    });

    app.post('/todo',urlencodedParser,function(req,res){
        // get data from the view and add it to database
        var newTodo = Todo(req.body).save(function(err,data){
            if (err)throw err;
            res.json(data);
        })
        // res.render('todo',{todos: data});
    });

    app.delete('/todo/:item',function(req,res){
        // delete requested item
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
        })
    })
};