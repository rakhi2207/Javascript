function isEmpty(para1)
{
    let count=0;
    for(let key in para1)
    {
        count++;
    }
    return count==0;
}
let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false