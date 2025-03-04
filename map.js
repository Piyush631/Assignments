let arr=[2,3,4,5];
const newarr=[];
for(let i=0;i <arr.length;i++)
{
    newarr.push(arr[i]*2);
}
console.log(newarr);

const input=[2,3,4,5];

//using a map function
 function transform(n){
    return n*3;
 }
 const answ=input.map(transform);

 //second way
 const ans=input.map((i)=>{
    return i*2;

 })
 console.log(ans);