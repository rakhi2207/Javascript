//Single element Selector
let element=document.getElementById("check");
console.log(element);
console.log(element.className);
console.log(element.childNodes);
console.log(element.parentNode);
element.style.color="blue";

let set=document.querySelector('#s1');
console.log(set);
set.style.color="green";
set.innerText="changing the text";
set.innerHTML="<b>changing the text</b>";

//Multi elemet Selector
let elems=document.getElementsByClassName("child");
Array.from(elems).forEach(element=>
    {
        console.log(element);
    });

    element.style.color="pink";

