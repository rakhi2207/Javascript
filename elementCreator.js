let ele=document.createElement('ul');
let text=document.createTextNode("new ul");

ele.appendChild(text);
ele.className="child";
ele.id="check2";
ele.style.color="blue";


let sets=document.querySelector('.container');
console.log(sets);
sets.appendChild(ele);