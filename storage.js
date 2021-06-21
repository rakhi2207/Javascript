localStorage.setItem('Name','Rahul');
localStorage.setItem('Name1','Rohan');
console.log(localStorage.getItem('Name'));
let arr=['aloo','goobi','bhidi','pyaz'];
localStorage.setItem('Sabzi',JSON.stringify(arr));

console.log(JSON.parse(localStorage.getItem('Sabzi')));
