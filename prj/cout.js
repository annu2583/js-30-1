let display = document.getElementById("counterValue");
let incre = document.getElementById("increment");
let decre = document.getElementById("decrement");
let reset = document.getElementById("reset");
// console.log(reset);
let count = 0;

incre.addEventListener('click',function(){
    count++;
    display.innerHTML = count;
    
})
let i = 0
while (i<6) {
    console.log(i);
}