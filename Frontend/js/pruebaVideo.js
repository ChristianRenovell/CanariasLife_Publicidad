
let tag = document.querySelector("iframe");

//publicidad
tag.setAttribute("src","https://www.youtube.com/embed/3WVQ9ugRdjI" );

function mensaje() {
    
document.getElementById("iframePublicidad").style.display = "none";
}
    
setTimeout(mensaje,6000);

window.onload = updateClock;
var totalTime = 5;
function updateClock() {
document.getElementById('countdown').innerHTML = totalTime;
if(totalTime==0){

let tagCrono = document.getElementById("publi").style.display ="none";

}else{
totalTime-=1;
setTimeout("updateClock()",1000);
}
}

