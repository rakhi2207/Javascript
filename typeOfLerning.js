// let f;
// (function()
// {
//     if(false)
//     {
//         f=()=>{
//             return 1;
//         }
//         ;
//     }
//     return f;
// })();
// console.log(typeof(f))

// var a=(new Array(10)).toString();
// console.log(a)

function learning(param)
{
    if(typeof(param)=='string')
    {
        console.log("string");
    }else
    {
        console.log(typeof(param));
    }
}

learning(12.35);