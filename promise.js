let data=1;
console.log(data);

const output=new Promise((resolve,reject)=>
{
    reject(data);
});

data=3;
console.log("outer",data);

output.then((item)=>
{
    console.log("promise data",data)
}).catch((err)=>
{
    console.log(err);
});