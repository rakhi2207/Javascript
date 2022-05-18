//var is function scoped but not block scoped
var varName=10;
function fn()
{
    var varName=20;
    console.log(varName)
}
fn();
console.log(varName)