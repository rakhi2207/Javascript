Function.prototype.myBind=function(...args)
{
    let obj=this;
    console.log(this)
    params=args.slice(1)
    return function()
    {
        obj.apply(args[0],params)
    }
}

let person1={
    name:'Adam',
    age:30
}

function f1(city)
{
    console.log(this);
    console.log(`${this.name} is of ${this.age} lives in ${city}`);
}

let result=f1.myBind(person1,'Noida');

result();