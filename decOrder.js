let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

arr.sort(
    function(a,b)
    {
        return b-a;
    }
);
alert( arr ); // 8, 5, 2, 1, -10