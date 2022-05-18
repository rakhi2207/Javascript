//var is function scoped but not block scoped
// var varName=10;
// function fn()
// {
//     console.log(varName)
//     var varName=20;
//     console.log(varName)
// }
// fn();
// console.log(varName)

// var varName=10;
// //function fn()
// {

//    console.log("fn check "+varName);
//    varName=90;
// }
// //fn();
// console.log(varName)


const fullName = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    const fullName = "Oluwa Sofe";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile());

