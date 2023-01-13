function sum(arr, n) {
    // Only change code below this line
    if(n<=0)
    {
      return 0;
    }
    let ans=0;
    ans=sum(arr,n-1)+arr[n-1];
    //console.log(sum);
    return ans;
    // Only change code above this line
  }

  console.log(sum([2,3,4],1));