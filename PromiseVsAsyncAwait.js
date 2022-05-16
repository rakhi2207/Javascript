function getTeaOrCoffee(drink)
{
    return new Promise(
        function(resolve,reject)
        {
            if(drink=='coffee')
                resolve('Order placed');
            else
                reject(`Sorry,we don't have`);
        }
    );
}

function process(order)
{
    return new Promise(function(resolve)
    {
        console.log('processing');
        resolve(`Dear ${order}`);
    });
}

// getTeaOrCoffee('tea').then((val)=>
// {
//     process(val).then((x)=>
//     {
//         console.log(x);
//     })
// }).catch((err)=>
// {
//     console.log(err);
// })
async function serve()
{  
    try{
    
            let val=await getTeaOrCoffee('tea');
            let op=await process(val);
            console.log(op)
    }catch(err)
    {
        console.log(err);
    }
}

serve();