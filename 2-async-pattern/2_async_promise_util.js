const {readFile,writeFile} = require('fs')
const util=require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () =>{
    try{
        const first = readFilePromise('./content/first.txt','utf8');
        const second = readFilePromise('./content/second.txt','utf8');
        await writeFilePromise('./content/newFile.txt',`This is Awsome : ${first} ${second}`, {flag: 'a'});
        console.log(first,second);
    }
    catch(error){
        console.log(error);
    }
}

start()