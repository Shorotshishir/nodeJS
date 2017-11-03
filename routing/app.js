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
    if( req.url==='/home'| req.url ==='/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);    
    }else if(req.url==='/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);    
    }else if(req.url==='/api/zims'){
        var zims = [{
            name:'tanzim',
            age:26
        },{
            name:'sirat',
            age:27
        }];
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(zims));
    }else{
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);    
    }
    
    // res.end('routing test');
    // var myReadStream =  fs.createReadStream(__dirname+'/index.html','utf8'); //reading and storing in buffer
    // var myWriteStream =  fs.createWriteStream(__dirname+'/writeme.txt','utf8');

    // myReadStream.pipe(res);//piping to respopnse stream
    // res.end("server response ended");
});

server.listen(3000,'127.0.0.1');
console.log('now i am listening to port 3000');