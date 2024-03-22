// let menu = document.getElementsByClassName('nav_menu')
// let toggle = document.getElementsByClassName('togle_icon')
//  function navmenu() {
//     if () {
        
//     }
//  }

let menu = document.querySelector(".nav_menu")
let toggle = document.querySelector('.togle_icon')
let cross = document.querySelector('.cross_icon')
toggle.addEventListener('click',function(){
    menu.classList.add("active")
}
);
cross.addEventListener('click',function(){
    menu.classList.remove("active")

})
