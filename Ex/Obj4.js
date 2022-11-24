function multiplyNumeric(param1)
{
    for(let key in param1)
    {
        if(typeof(menu[key])=="number")
        {
            param1[key]*=2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
    // afun:function val()
    // {
    //     console.log("a fun inside object");
    // }
  };
  
  multiplyNumeric(menu);

  console.log(menu);

  let cloneuser=structuredClone(menu);

 // console.log(cloneuser.afun)