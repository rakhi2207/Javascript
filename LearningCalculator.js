function Calculator()
{
    let method=[];
    this.addMethod=function (val,logic)
    {

        method[val]=logic;
    }
   this.calculate=function (str)
   {
     let values=str.split(" ");

     if(!method[values[1]]||isNaN(values[0])||isNaN(values[2]))
     {
        return NaN;
     }

     return method[values[1]](+values[0],+values[2]);
   }

}

let powerCalc = new Calculator;
console.log(powerCalc)
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 + 3");
alert( result ); // 8