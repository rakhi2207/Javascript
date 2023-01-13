
let calculator = {
    read:function()
    {
       var a=+prompt("Enter first value?",0);
        var b=+prompt("Enter second value?",0);
        console.log(a+" "+b);
    },
    sum:function ()
    {
      console.log("sum "+a+" "+b);
      return this.a+this.b;
    },
    mul:function ()
    {
      return this.a*this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );