
function f(num)
{
    let sum=0;
    if(num==0)
    {
        return sum;
    }
    sum+=f(num-1);
    sum+=num;
    return sum;
}

console.log(f(10));