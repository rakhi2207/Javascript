const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      .box
{
    height:20px;
    width:100px;
    margin:7.8% 0% 0% 0%;
    float:left;
}
.red
{
    background-color:red;
    margin:7.8% 0% 0% 30%;
}
.pink
{
    background-color:pink;
}
.orange
{
    background-color:orange;
}
.blue
{
    background-color:blue;
}
.violet
{
    background-color:violet;
}
.center
{
    border: 2px solid black;
    border-radius: 50%;
    width:20%;
    height: 200px;
    display: inline-block;
    margin:10% 40% 0% 40%;
}

      </style>
  </head>
  <body>
      <div class="contaier">
          <div class="box red"></div>
          <div class="box pink"></div>
          <div class="box orange"></div>
          <div class="box blue"></div>
          <div class="box violet"></div>
      </div>
      <div class="center"></div>
      <script>
      const red=document.querySelector(".red");
const pink=document.querySelector(".pink");
const orange=document.querySelector(".orange");
const blue=document.querySelector(".blue");
const violet=document.querySelector(".violet");
const getColour=(selectedElement)=>
{
    return window.getComputedStyle(selectedElement).backgroundColor;
}

const center=document.querySelector(".center");
const setColor=(element,color)=>
{
    return element.addEventListener("mouseenter",()=>
    {
        center.style.backgroundColor=color;
    });
}

setColor(red,getColour(red));
setColor(pink,getColour(pink));
setColor(orange,getColour(orange));
setColor(blue,getColour(blue));
setColor(violet,getColour(violet));
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});