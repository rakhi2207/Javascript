myPara=document.querySelectorAll('p');

myPara.forEach((element) => {
   element.textContent="changed"; 
});

const ele=document.createElement('p');
ele.innerText="New Para";

myPara[0].appendChild(ele);

const ele2=document.createElement('p');
ele2.innerText="Newest Para";
myPara[0].replaceChild(ele2,ele);
