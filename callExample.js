let person1={
    name:'Adan',
    age:32
}

let person2={
    name:'Steve',
    age:33
}

// function f1()
// {
//     console.log(this.name+" "+this.age);
// }
// let binddemo=f1.bind(person2);
// console.log(binddemo)
// binddemo()

function f1(city,car)
{
    console.log(`${this.name} is of ${this.age} lives in ${city} and drives ${car}`);
}

let binddemo2=f1.bind(person2,'Noida','BMW');
console.log(binddemo2)
binddemo2()