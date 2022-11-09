var menu=document.getElementById("menu")
menu.onclick = function(){
        menu.classList.toggle("openmenu");
}

let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menu");
let homeclick = document.getElementById("elthome");
let servclick = document.getElementById("eltservices");
let aboutclick = document.getElementById("eltabout");
let workclick = document.getElementById("eltwork");
let footerclick = document.getElementById("eltfooter");

menuIcon.onclick = function(){
    menuBox.classList.toggle("open-menu");
    menuIcon.classList.toggle("openmenu");
}

homeclick.onclick = function(){
    menuBox.classList.toggle("open-menu");
    menuIcon.classList.toggle("openmenu");
}

servclick.onclick = function(){
    menuBox.classList.toggle("open-menu");
    menuIcon.classList.toggle("openmenu");
}

aboutclick.onclick = function(){
    menuBox.classList.toggle("open-menu");
    menuIcon.classList.toggle("openmenu");
}

workclick.onclick = function(){
    menuBox.classList.toggle("open-menu");
    menuIcon.classList.toggle("openmenu");
}

footerclick.onclick = function(){
    menuBox.classList.toggle("open-menu");
    menuIcon.classList.toggle("openmenu");
}
