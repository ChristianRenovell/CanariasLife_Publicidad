let tag = document.getElementById("iframePubli")
let tagCrono = document.getElementById("publi").style.display = "none";

function see() {
    let tagCrono = document.getElementById("publi").style.display = "block";
    let tagBut = document.getElementById("btn").style.display = "none";
    setTimeout(change, 6000);
    tag.setAttribute("src", "https://gesbonos.com/publicidad/videos.html");
    
}

function change() {
    let tagCrono = document.getElementById("publi").style.display = "none";
    
    console.log("kodncoiewnw")
    tag.setAttribute("src", "https://www.youtube.com/embed/sZoGAfmxvpU");
}





