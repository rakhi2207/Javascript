function outest()
{
    function outer()
    {
        function inner()
        {
            var c=1000;
            console.log(a+" "+b+" "+c);
        }
        inner();
        var b=90;
    }
    outer();
    var a=900;
}

outest();