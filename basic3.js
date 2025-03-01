/*Write code to read contents of a file and print it to the console. You can use the fs library to as a black box,
 the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it 
 affects the output. Make the expensive operation more and more expensive and see how it affects the output.*/
 /*const fs=require('fs');

function print(err,data)
{
    console.log(data);
}

fs.readFile('a.txt','utf8',print);




// Function to read a file asynchronously
fs.readFile('a.txt', 'utf8', (err, data) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('Error: File not found!');
    } else {
      console.error('Error reading file:', err);
    }
    return;
  }
  console.log('File contents:', data);
});


let data2 = "This is a file containing a collection of books.";

fs.writeFile("a.txt", data2, (err) => {
    if (err) console.log(err);
    else {
        console.log("File written successfully\n");
        console.log("The written file has the following contents:");
        console.log(fs.readFileSync("a.txt", "utf8"));
    }
}); */



/*function updateclock()
{
    const now=new Date();
    const hours=now.getHours().toString().padStart(2,'0');
    const minutes=now.getDate().toString().padStart(2,'0');
    const seconds=now.getSeconds().toString().padStart(2,'0');
    console.log(`24 hoursfomat: ${hours}:${minutes}:${seconds}`);
    setTimeout(updateclock,1000);
}
updateclock();*/


/*function setTimeoutPromisified(d){

    return new Promise(function (resolve){
        setTimeout(resolve,d);
    });
}

setTimeoutPromisified(1000).then(function() {
    console.log("hlo");
    return setTimeoutPromisified(2000)
}).then(function(){
    console.log("sdf");
});;
        console.log("call");*/


/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise ( (resolve)=>{
        setTimeout(resolve,t*1000);
        });


};

function wait2(t) {
    return new Promise ( (resolve)=>{
        setTimeout(resolve,t*1000);
        });
}

function wait3(t) {
    return new Promise ( (resolve)=>{
        setTimeout(resolve,t*1000);
        });

}

async function calculateTime(t1, t2, t3) {
    const starttime=Date.now();
    await Promise.all([wait1(t1),wait2(t2),wait3(t3)]);
    const time=starttime-Date.now();
    return time;
}

module.exports = calculateTime;

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
return new Promise (resolve =>{
    setTimeout(resolve,t*1000);
})
}

function wait2(t) {
    return new Promise (resolve =>{
        setTimeout(resolve,t*1000);
    })
}

function wait3(t) {
    return new Promise (resolve =>{
        setTimeout(resolve,t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    return call(t1,t2,t3).then(function(){
        return time;
    })


}
function call(t1,t2,t3)
{
    return wait1(t1).then (function () {
        wait2(t2);
    }).then (function (){
        return wait3(t3);
    })
}
module.exports = calculateTime;