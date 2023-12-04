const {readFile,writeFile} = require('fs')

 

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result);
})


writeFile('./content/result-async.txt',`This is Prasad Gujar`,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});