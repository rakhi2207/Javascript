function unique(arr) {
    let ans=[];
    for(let val of arr)
    {
        if(!ans.includes(val))
        {
            ans.push(val);
        }
    }
    return ans;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O