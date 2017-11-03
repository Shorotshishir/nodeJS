var fs = require('fs');

// var readme = fs.readFileSync('readme.txt','utf8');
fs.readFile('readme.txt','utf8',function(err,data){
    fs.writeFile('writeme.txt',data);
    console.log(data);
});

// fs.writeFileSync('writeme.txt',readme);
console.log('test');

fs.unlink('readme.txt')