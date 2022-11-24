let prom=new Promise((resolve,reject)=>
{
    reject("Promise is Resolved");
});

prom.then((err)=>
{
    console.log(err);
}).catch((err)=>
{
    console.log("catch",+err);
})