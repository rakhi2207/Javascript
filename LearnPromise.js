let promise=new Promise((resolve,reject)=>
{
    reject("Hello ");
})

promise.then((arr)=>
{
    console.log("resolve "+arr);
}).catch((err)=>
{
    console.log("reject "+err)
})