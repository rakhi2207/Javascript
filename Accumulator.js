function Accumulator(initialValue)
{
    this.value=initialValue;
    this.read=function()
    {
        let val=prompt("Enter the no",0);
        this.value+=+val;
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values