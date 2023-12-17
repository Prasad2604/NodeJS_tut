const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

// console.log(first)
// console.log(second)

writeFileSync('./content/third.txt','Hello this is third text file');

const third = readFileSync('./content/third.txt','utf-8');

console.log(third);
// for appending in the existing file
writeFileSync('./content/third.txt',` result is : ${first+second}`,{flag:'a'});
console.log(readFileSync('./content/third.txt','utf-8')
);