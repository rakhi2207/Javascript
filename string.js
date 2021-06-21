let str="Hello World";
let str1="Hii";
let name="Rakhi";

console.log(str.concat(str1));
console.log(str+" "+str1);
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str.indexOf('Hello'));
console.log(str.indexOf('o'));
console.log(str.lastIndexOf('o'));
console.log(str.endsWith('o'));
console.log(str.endsWith('d'));
console.log(str.includes('World'));
console.log(str.substring(2,5));
console.log(str.slice(-3));
console.log(str.split(" "));
console.log(str.replace("World","Rakhi"));

let templates=`Hello ${name}`;
console.log(templates);