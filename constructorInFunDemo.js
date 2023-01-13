function SmallUser() {

    this.name = "John";
  
    return {name:'abc'}; // <-- returns this
  }
  
  alert(new SmallUser().name );  // John