let count1=document.getElementsByTagName("p")[0];
let ans=1;
setInterval(()=>{
    if(ans<1000)
    {
        ans++;
        count1.innerText=ans;
    }
},2);

let value=document.getElementsByTagName("h1")[0];
setTimeout(()=>
{
    value.innerText="Followers on Instagram";
},5000)