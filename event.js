let set=document.getElementById("s1").addEventListener('click',function(e)
{
    let variable=e.target;
    let ele=document.getElementById("s1");
    ele.style.color="red";
    console.log("Clicked Hello");
    console.log(variable);
    location.href="https://www.google.com/search?q=codewithharry&oq=codewith&aqs=chrome.0.0i67i433j69i57j0i20i263j0j69i60l4.4554j0j7&sourceid=chrome&ie=UTF-8";
});