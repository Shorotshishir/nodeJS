
var counter = function(arr){
    return 'There are '+ arr.length + ' elements is this array';
};
var adder = function(a,b){
    return `the sum of the two number is ${a+b}`
};

var pi = 3.142;

module.exports={
    counter:counter,
    adder: adder,
    pi:pi
};

