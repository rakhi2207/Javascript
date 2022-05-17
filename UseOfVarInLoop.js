for(let i=0;i<=5;i++)
{
    function fun(x){
        setTimeout(()=>
        {
            console.log(x);
        },1000);
    }

    fun(i);
}