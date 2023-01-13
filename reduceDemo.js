//reduce
// let arr=[1,2,3,4,5];
// let ans=arr.reduce(
//     function(arr,curr)
//     {
//         if(arr<curr)
//         {
//           return curr;
//         }
//     },0
// );

// console.log(ans);

//filter

let arr=[{firstname:"abc",age:34},{firstname:"efg",age:40},{firstname:"ghi",age:24},{firstname:"efg",age:10}];

let ans=arr.filter((x)=>
{
  if(x.age>30)
  {
    return 1;
  }
  return 0;
});

console.log(ans);