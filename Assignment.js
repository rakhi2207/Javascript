const courses=[
    {
        name:"Bootstrap",
        price:"2.3"
    },
    {
        name:"React",
        price:"4.3"
    },
    {
        name:"Angular",
        price:"6.3"
    },
    {
        name:"Java",
        price:"3.3"
    },
    {
        name:"python",
        price:"1.3"
    },
]

/* <li>Javascript <span class="float-right">$2.1</span></li> */

function generateList()
{
    const ul=document.querySelector(".dec");
    ul.innerHTML="";
    courses.forEach(element => {
        const li=document.createElement("li"); 
        li.innerText=element.name;
        li.classList.add("list");
        const span=document.createElement("span");
        span.classList.add("float-right");
        span.innerText="$"+element.price;
        li.appendChild(span);
        ul.appendChild(li);
    }); 
}

generateList();
const button=document.querySelector(".sort-order");
button.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price);
    generateList();
});
const buttons=document.querySelector(".sort-dec");
buttons.addEventListener("click",()=>{
    courses.sort((a,b)=>b.price-a.price);
    generateList();
});