arr=[1,2,3,4];
let myarr=arr.map(function(x)
{
    return x*x;
})

console.log(myarr);

let filterArr=myarr.filter(function(x)
{
    return x%2==0;
})

console.log(filterArr);

let reduceArr=myarr.reduce(function(sum,curr)
{
    return sum+=curr;
},0)

console.log(reduceArr)


