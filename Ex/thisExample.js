'use strict';
function fun1()
{
    console.log(this.name);
}

let user=
{
    name:"John"
}

let abc=
{
    name:"Jony"
}
console.log(11/3);
user.fun1=fun1;
abc.fun1=fun1;

user.fun1();
abc.fun1();
