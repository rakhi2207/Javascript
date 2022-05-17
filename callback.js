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


