const fs=require('fs').promises

let fileReader1=fs.readFile('./f1.txt');

function c1(data)
{
    console.log('data '+data);
    let fileReader2=fs.readFile('./f2.txt')
    return fileReader2
}

function c2(data)
{
    console.log('data '+data);
    let fileReader2=fs.readFile('./f3.txt')
    return fileReader2
}

function c3(data)
{
    console.log('data '+data);
}

fileReader1.then(c1).then(c2).then(c3).catch((err)=>{console.log(err)})