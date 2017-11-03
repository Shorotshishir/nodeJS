var fs = require('fs');
// create file and directory

// fs.mkdir('stuff',function(){
//     fs.readFile('readme.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/writeme.txt',data);
//     });
// });

// delete directory
fs.unlink('./stuff/writeme.txt',function(){
    fs.rmdir('stuff');
});
