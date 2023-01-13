function camelize(val)
{
    let med=val.split("-");
    if(med.length==0)
    {
        return undefined;
    }
    let ans=med[0];
    for(let i=1;i<med.length;i++)
    {


         if(med[i].length>0)
       // console.log(val.at(0).toUpperCase());
         ans+=med[i].at(0).toUpperCase()+med[i].substring(1);
    }
    console.log(ans);
     return ans;
}

alert(camelize("background-color") == 'backgroundColor');
alert(camelize("list-style-image") == 'listStyleImage');
alert(camelize("-webkit-transition") == 'WebkitTransition');