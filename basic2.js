const fs=require('fs');

/*function main()
{
    console.log('hi');
    setTimeout(basic,3000);
}
function basic()
{
    console.log("hlo there");
}
setTimeout(main,1000);*/
function random()
{

}


function readthefile(finalread)
{
    fs.readFile("a.txt","utf-8",function(err,data)
{
    finalread(data);
(data);
})
}
function readfile(filename)
{
    return new Promise(readthefile);
}
const p=readfile();
function callback(content)
{
    console.log(content);
}
p.then(callback);
