function countdown(n){
    if(n<=0)
    {
       return [];
    }
    let ans=countdown(n-1);
    ans.unshift(n);
    return ans;
  }

  console.log(countdown(10));