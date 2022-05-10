let data=1;
console.log(data);

const output=new Promise((resolve,reject)=>
{
    resolve(data);
});

data=3;
console.log("outer",data);

output.then((item)=>
{
    console.log("promise data",item)
}).catch((err)=>
{
    console.log(err);
});