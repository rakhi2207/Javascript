let ele=document.getElementById('box');
let html=`<textarea></textarea>`
console.log(html.length)
ele.addEventListener("click",function()
{
    if(document.getElementsByTagName('textarea').length==0){
        ele.innerHTML=html;
    }
})
