document.getElementById("name").innerHTML = "Hello World!";


// let links=document.getElementsByClassName("nav_link")
// let tags=document.getElementsByTagName("p")
// links[0].innerHTML="HOME"
// console.log(links);


let link=document.querySelectorAll(".nav_link")
let btn=document.querySelector(".btn_container")
console.log(link);

console.log(link[0].getAttribute('href')); 
link[0].setAttribute('href','www.google.com')

link[0].style.color="blue"
btn.style.backgroundColor="red"