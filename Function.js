 var isEven=function (element)
 {
    //  if(element%2==0)
    //     {
    //         return true;
    //     }
    //     return false;
    return element%2==0;
 }


 console.log(isEven(2));

 //Arrow function
 var isEven=(element)=>
 {
    return element%2==0;
 }
 console.log(isEven(3));

 var ans=[2,3,4,8].every(isEven);
 console.log(ans);

 //callback function
 var ans=[2,6,4,8].every((e)=>
 {
    return e%2==0;
 });
 console.log(ans);


//when we don't want to use the return function
 var ans=[2,6,4,8].every((e)=>(e%2==0));
 console.log(ans);

 var arr=[1,2,3,4,5]
 console.log(arr.fill("r",2,4));

 var arr=[1,2,3,4,5]
 console.log(arr.filter((e)=>e<3));

 var use=["Rohan","Tim","Tom","Sam","Nam","Tims"];
console.log(use.slice(1,3));
console.log(use)

var use=["Rohan","Tim","Tom","Sam","Nam","Tims"];
use.splice(1,3,"HI","BYE");
console.log(use);

var use=["Rohan","Tim","Tom","Sam","Nam","Tims"];
use.forEach((e)=>(console.log(e)))
                                                                                         
for(var n of use)
{
    console.log(n);
}

// for getting the keys of object

