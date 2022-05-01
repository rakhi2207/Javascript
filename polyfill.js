//Map Polyfill
function mapPolyFill(arr,cb)
{
    let newArr=[];

    for(i=0;i<arr.length;i++)
    {
        newArr.push(cb(arr[i]));
    }

    return newArr;
}

function circumference(radius)
{
    return 2*Math.PI*radius;
}

function area(radius)
{
    return Math.PI*radius*radius;
}

function diameter(radius)
{
    return 2*radius;
}
let myArr=[1,2,3,4];
console.log(mapPolyFill(myArr,area));
console.log(mapPolyFill(myArr,circumference));
console.log(mapPolyFill(myArr,diameter));


// filter Polyfill

function filterpolyFill(arr,cb)
{
    let newArr=[];

    for(i=0;i<arr.length;i++)
    {
        if(isEven(arr[i]))
            newArr.push(cb(arr[i]));
    }

    return newArr;
}

function isEven(x){
    if(x%2==0)
    return x
}


console.log(filterpolyFill(myArr,isEven));

// Reduce Polyfill



function reducepolyFill(arr)
{
    let sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }

    return sum;
}

console.log(reducepolyFill(myArr));