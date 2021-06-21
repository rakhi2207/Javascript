console.time("Your code took");
var paymentMode="credit";
console.log(paymentMode);
console.warn("Warning");
console.error('This is an error');

let name="Rakhi";
console.log("Name is "+typeof name);

let number=34;
console.log("Number is "+typeof number);

let boolean=true;
console.log("Boolean is "+typeof boolean);

let arr=[1,2,3,4,5];
console.log("Array is "+typeof arr);

let stuMarks={Rakhi:89,Vandana:90,Aditi:100,Shiavangi:98};
console.log("Student Marks is "+typeof stuMarks);

let bool=false;
console.log("Type Conversion using to String method is "+bool.toString(),typeof bool.toString());

let num=parseInt('34.08');
console.log(num ,typeof num);

let boolNum=Number(false);
console.log(boolNum ,typeof num);

let floatNum=parseFloat('34.08');
console.log(floatNum ,typeof num);
console.log(floatNum.toFixed(30));

//Type Coersion

let stringNum=Number("698");
let booleanNum=34;
console.log(stringNum+booleanNum);
console.timeEnd('Your code took');