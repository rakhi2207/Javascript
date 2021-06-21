const red=document.querySelector(".red");
const pink=document.querySelector(".pink");
const orange=document.querySelector(".orange");
const blue=document.querySelector(".blue");
const violet=document.querySelector(".violet");
const getColour=(selectedElement)=>
{
    return window.getComputedStyle(selectedElement).backgroundColor;
}
console.log(getColour(red))
const center=document.querySelector(".center");
const setColor=(element,color)=>
{
    return element.addEventListener("mouseenter",()=>
    {
        center.style.backgroundColor=color;
    });
}

setColor(red,getColour(red));
setColor(pink,getColour(pink));
setColor(orange,getColour(orange));
setColor(blue,getColour(blue));
setColor(violet,getColour(violet));