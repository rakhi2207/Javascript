let val=(function f1()
{
    let name='Adam';

    var getName=function()
    {
        return name;
    }
    var setName=function(ans)
    {
        name=ans;
    }
    return{
        getName:getName,
        setName:setName
    }
}());
val.setName('BOb')
console.log(val.getName())
console.log(val.name)



