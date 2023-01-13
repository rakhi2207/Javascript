// create a function and immediately call it with new
let user =function() {
   if(!new.target)
   {
    return new user();
   }
    this.name = "John";
    this.isAdmin = false;
  
    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
  }

  console.log(user().name);