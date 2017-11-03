var http = require('http');
var fs = require('fs');


// myReadStream.on('data',function(chunk){
//     console.log('new chunk received');
//     myWriteStream.write(chunk);
//     // console.log(chunk);
// });


// var http = require('http');

var server = http.createServer(function(req,res){

    console.log('request was made: '+req.url);
    res.writeHead(200, {'Content-Type':'text/html'});
    var myReadStream =  fs.createReadStream(__dirname+'/index.html','utf8'); //reading and storing in buffer
    // var myWriteStream =  fs.createWriteStream(__dirname+'/writeme.txt','utf8');

    myReadStream.pipe(res);//piping to respopnse stream
    // res.end("server response ended");
});

server.listen(3000,'127.0.0.1');
console.log('now i am listening to port 3000');