var elem = document.querySelectorAll(".box")
var elemimage = document.querySelector(".box img")

elem.forEach(function(abb){

abb.addEventListener("mouseenter",function(a){
    abb.childNodes[1].style.opacity=1
})
abb.addEventListener("mouseleave",function(a){
    abb.childNodes[1].style.opacity=0
})
abb.addEventListener("mousemove",function(a){
    abb.childNodes[1].style.left=a.x+"px"
    // abb.childNodes[1].style.top=a.y+"px"


})
})
