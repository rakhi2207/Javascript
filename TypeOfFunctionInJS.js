// function statement

function hello()
{
    console.log("hello");
}

hello();

//Function Expression

let b=function fun()
{
    console.log("hii");
}

b();

//Anonymus function

let c=function ()
{
    console.log("learning");
}
c();

//IIFE

(function(param)
{
    console.log(`I am IIFE .I will get automatically called without ${param} call`)
})("external");


//Arrow Function

let area1=(radius)=>Math.PI*radius*radius;

console.log(area1(5));

//First class function

function area(x)
{
    return Math.PI*x*x;
}
function perimeter(x)
{
    return 2*Math.PI*x;
}


function getAns(x,fun)
{
    let ans=fun(x);
    console.log(ans);
}

getAns(5,area);
getAns(5,perimeter);
