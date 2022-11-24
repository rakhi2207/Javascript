const arr=[1,2,3,4];
for(const item of arr)
{
    console.log(item);
}

arr.push(10);
arr.unshift(0);
console.log(arr);
console.log(arr.pop());
arr.shift();
console.log(arr);

const newarr=arr.map((n)=>
{
    return n*n;
});
console.log(newarr);
const ans=newarr.reduce((n,sum)=>
{
    sum+=n;
    return sum;
})
console.log(ans);

const fillarr=arr.filter((n)=>
{
    return n%2==0;
});
console.log(fillarr);

const forarr=[11,12,13,14];

const concatArr=arr.concat(newarr,fillarr,forarr);
console.log(concatArr);