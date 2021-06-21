document.querySelector(".myfirst").addEventListener('mousemove',fun1);
function fun1(e)
{
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},154)`;
}