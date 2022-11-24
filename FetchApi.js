let val=fetch("/home/rakhi/Documents/Javascript/f1.txt");
val.then(res =>
    res.json()).then(d => {
        console.log(d[0])
    })