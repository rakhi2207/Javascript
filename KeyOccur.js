// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
    // Only change code above this line


    for(let i=0;i<contacts.length;i++)
    {
        console.log(contacts[i].firstName);
       if(contacts[i].firstName===name)
       {
         let key=Object.keys(contacts[i]);
         console.log(key);
          for(let j=0;j<key.length;j++)
          {
            console.log(contacts[i]);
            if(key[j]===prop)
            {
                console.log("hello "+contacts[i][key[j]]);
                return contacts[i][prop];
            }
          }
          return "No such property";
       }
    }
    return "No such contact";
  }
  
console.log(lookUpProfile("Harry", "likes"));