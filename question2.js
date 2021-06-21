/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/
let divFirst=document.createElement('div');
let text=document.createTextNode("This is editable text");
divFirst.appendChild(text);
divFirst.setAttribute('id','text');
divFirst.setAttribute('class','text');

divFirst.setAttribute('style','border:2px solid black;width:200px;magin:50px;padding:70px')

let sets=document.querySelector('.myfirst');
let setCont=document.querySelector('.container');

sets.insertBefore(divFirst,setCont);

document.querySelector('')