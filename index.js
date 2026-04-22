let menuEl = document.getElementById("menu-icon")
let navbarEl = document.getElementById("navbar-links")
let crossEl = document.getElementById("cross-icon")

function clickMenu(){
    menuEl.style.display="none";
    navbarEl.style.left="10px";
    navbarEl.style.top="65px";
    navbarEl.style.display="flex"
    crossEl.style.display="inline-block";
}
function closeIcon(){
    menuEl.style.display="inline-block";
    navbarEl.style.display="none"
    crossEl.style.display="none";
}