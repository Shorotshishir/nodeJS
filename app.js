// var stuff = require('./stuff');

// console.log(stuff.counter(['me', 'I','and', 'myself']));
// console.log(stuff.adder(2,8));
// console.log(stuff.pi);
// console.log(stuff.adder(stuff.pi , 12));

// var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(msg){
//     console.log(msg);
// });

// myEmitter.on('event2',function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent', 'the event was emitted !!!');
// myEmitter.emit('event2', 'new event is emitted !');

// var events = require('events');
// var util = require('util');


// var Person =  function(name){
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);
// var Zim = new Person('Zim');
// var Tan = new Person('Tan');
// var Sirat = new Person('Sirat');

// var people = [Zim,Tan,Sirat];

// people.forEach(function(person){
//     person.on('speak',function(msg){
//         console.log(person.name +' said: '+msg);
//     });
// });

// Zim.emit('speak','yalla whassup');
// Sirat.emit('speak','vnnevnuorhvouh uerhu rgupr tuhgt');
// Tan.emit('speak','236183761287393293458324562748562347568768763456387458')


