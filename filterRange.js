function filterRange(arr,a,b)
{
    let ans=arr.filter((val)=>val>=a&&val<=b);
    return ans;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 