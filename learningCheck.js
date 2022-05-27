//earlier then method
// let val=new Promise((resolve,reject)=>
// {
//     reject("Promise is rejected");
// })

// val.then(null,(arr)=>
// {
//     console.log("then "+arr);
// }).catch((err)=>
// {
//     console.log(err);
// })

//Promise is given more preference than setTimeout
// setTimeout((err)=>
// {
//     console.log("Hello");
// },1000);

// console.log("Bye");

// let val=new Promise((resolve,reject)=>
// {
//     reject("Promise is rejected");
// })

// val.then(null,(arr)=>
// {
//     console.log("then "+arr);
// }).catch((err)=>
// {
//     console.log(err);
// })

//setInterval

// let counter=0;
// let IntervalId;
// function sayHi()
// {
//     counter++;
//     console.log("Hello");
//     if(counter>3)
//     {
//         clearInterval(IntervalId);
//     }
// }
// IntervalId=setInterval(sayHi,1000);

//closure

// function f1()
// {
//     let a=10;
//     return function f2()
//     {
//         let b=20;
//         console.log(a+" "+b);
//     }
// }
// f1()();

//Map

// let arr=[1,2,3,4];
// let ans=arr.map((x)=>x*x);
// console.log(ans);

//Filter
// let arr=[1,2,3,4];
// let ans=arr.filter((x)=>x%2);
// console.log(ans);

//Reduce
// let arr=[1,2,3,4];
// let ans=arr.reduce((x,curr)=>
// {
//     x=x+curr
//     return x;
// },0);
// console.log(ans);

//Call

// function f1(degree)
// {
//     console.log(`My name is ${this.firstname} ${this.LastName} and pursuing ${degree}`);
// }

// person={"firstname":"Rakhi",
// "LastName":"Jha"};
// f1.call(person,"BTech")

//apply

// function f1(degree,year)
// {
//     console.log(`My name is ${this.firstname} ${this.LastName} and pursuing ${degree} currently in ${year} semester`);
// }

// person={"firstname":"Rakhi",
// "LastName":"Jha"};
// f1.apply(person,['Btech',6])

//Bind
// function f1(degree,year)
// {
//     console.log(`My name is ${this.firstname} ${this.LastName} and pursuing ${degree} currently in ${year} semester`);
// }

// person={"firstname":"Rakhi",
// "LastName":"Jha"};
// let nf=f1.bind(person,'Btech',6)
// nf();

//Polyfill of Bind
// Function.prototype.myBind=function(...value)
// {
//     let fun=this;
//     let obj=value[0];
//     let params=value.slice(1);
//     return function f1(){
//         fun.apply(obj,params);
//     }
// }
// function f1(degree,year)
// {
//     console.log(`My name is ${this.firstname} ${this.LastName} and pursuing ${degree} currently in ${year} semester`);
// }

// person={"firstname":"Rakhi",
// "LastName":"Jha"};

// let f2=f1.myBind(person,"BTech",6);
// f2();