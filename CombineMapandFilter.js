let arr=[
    {
        firstname:"Adam",
        age:30
    },
    {
        firstname:"raham",
        age:12
    }, 
    {
        firstname:"ram",
        age:40
    },
    {
        firstname:"shyam",
        age:15
    }
]

let ans=arr.filter((x)=>x.age>20).map((x)=>x.firstname);
console.log(ans);