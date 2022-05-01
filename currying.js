function f1(a,b)
{
    return a+b;
}

console.log(f1(2,3));


function f2(a)
{
    return function f3(b)
    {
        return a+b;
    }
}

let inBetweenFun=f2(3);
console.log(`currying result ${inBetweenFun(5)}`);