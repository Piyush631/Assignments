const fs=require('fs');
function print(err,data)
{
    console.log(data);
}
fs.readFile('a.txt','utf8',print);
setTimeout(()=>{
    console.log("hlo");
},9000);
console.log("piyush");


const map=new Map();
map.set('firstname','piyush');
map.set('age',44);
console.log(map.get('firstname'));