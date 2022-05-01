//Var is function blocked 
//for(var i=0;i<5;i++)
// {
//     function close(x)
//     {
//         console.log(x);
//     }
//     close(i)
// }

//setTimeout
// for(var i=0;i<5;i++)
// {
//     setTimeout
//     (
//         function()
//         {
//             console.log(i);
//         },i*1000
//     )
// }


//Callback
// function x()
// {
//     var a=10;
//     function y()
//     {
//         var b=10;
//         console.log(a,b);
//     }

//     return y;
// }

// x()();


//Callback
// function a(){
//     function x()
//     {
    
//         function y()
//         {
//             let b=20;
//             console.log(a,b,h,p);
//             // z();
//         }
//         function z()
//         {
//             var c=100;
//             console.log(c);
//         }
//         let a=10;
//         return y;
//     }

//     let h=1000;
//     return x;
// }


// a()()();
// var d=x();
// d();
 //console.log(varas);

// let vara=function a()
// {
//     console.log("1");
// }


//data hiding

// function counter()
// {
//     count =0;
//     return function getCount()
//     {
//         count++;
//         console.log(count);
//     }
// }

// var counter1=counter();
// counter1();
// counter1();
// var counter2=counter();
// counter2()
//counter2()

//button click count

function counter()
{
    let count=0;
    document.getElementById("click").addEventListener("click",function()
    {
        count++;
        let s=document.getElementsByTagName("p")[0].innerText+"\nbutton is clicked "+count+" time";
        document.getElementsByTagName("p")[0].innerText=s;
    });
}

counter();

//Closure of setTimeout

// console.log("Start");
// setTimeout(
//     function x()
//     {
//         console.log("Callback");
//     },5000
// );

// console.log("End");

//Arrow function

// const arr=[2,3,4,5,6];

// const output=arr.map((x)=>x*x);

// console.log(output);


//Reusable code

// const area=function (r)
// {
//     return Math.PI*r*r;
// }

// const circumference=function (r)
// {
//     return 2*Math.PI*r;
// }

// const diameter=function (r)
// {
//     return 2*r;
// }

// function calculate(radius,logic)
// {
//     console.log(logic);
//     output=[];
//     for(var i=0;i<radius.length;i++)
//     {
//         output.push(logic(radius[i]));
//     }

//     return output;
// }

// const radius=[1,2,3,4,5];

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));


//Learning reduce method

// const arr=[1,2,3,4,5];

// const output=arr.reduce(function(acc,curr)
// {
//     if(curr>acc)
//     {
//         acc=curr;
//     }
//     return acc;
// },0);

// console.log(output);
