let user={
    name:'abc',
    age:12,
};
console.log(user.name);
console.log(user['age']);
delete user.age;
 console.log(user.age);

// let obj = {
//     0: "test" // same as "0": "test"
//   };
  
//   // both alerts access the same property (the number 0 is converted to string "0")
// console.log( obj["0"] ); // test
// console.log( obj[0] ); // test (same property)


// these properties are all right
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };
  
//   console.log( obj.for + obj.let + obj.return );  // 6