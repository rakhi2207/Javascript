let john = { name: "John" };
let shyam = { name: "shyam" };
// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);
visitsCountMap.set(shyam,345)

alert( visitsCountMap.get(john) ); // 123
alert(visitsCountMap.get(shyam))