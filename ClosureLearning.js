function outer()
{
    let a=10;
    function inner()
    {
        console.log(a+5)
    }

    return inner
}

let check=outer()

console.log(check)

check();


//Array Prtotype

Array.prototype.mapPolyfill=function()
{
    let newArr=[];
    for(i=0;i<this.length;i++)
    {
        newArr.push(this[i]*this[i]);
    }

    return newArr;
}
arr=[1,2,3,4,5]
let newArr=arr.mapPolyfill();
console.log(newArr);
