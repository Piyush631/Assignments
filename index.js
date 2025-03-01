const fs=require('fs');
const text=fs.readFileSync('a.txt','utf8');  //synchronus
console.log(text);

const text2=fs.readFile('a.txt','utf8');  //assynchronus
console.log(text2);