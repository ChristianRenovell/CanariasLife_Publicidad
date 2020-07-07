//conprobar la franja horaria en que estamos
var dd = new Date();
let minu = dd.getMinutes()
if(minu >= 0 && minu <=5) gettJsonVideo("group1");
if(minu > 5 && minu <=10) gettJsonVideo("group2");
if(minu > 10 && minu <=15) gettJsonVideo("group3");
if(minu > 15 && minu <=20) gettJsonVideo("group4");
if(minu > 20 && minu <=25) gettJsonVideo("group5");
if(minu > 25 && minu <=30) gettJsonVideo("group6");
if(minu > 30 && minu <=35) gettJsonVideo("group7");
if(minu > 35 && minu <=40) gettJsonVideo("group8");
if(minu > 40 && minu <=45) gettJsonVideo("group9");
if(minu > 45 && minu <=50) gettJsonVideo("group10");
if(minu > 50 && minu <=55) gettJsonVideo("group11");
if(minu > 55 && minu <=60) gettJsonVideo("group12");


//reibe datos json
function gettJsonVideo(group){

    const requestURL = `https://raw.githubusercontent.com/ChristianRenovell/CanariasLife_Publicidad/Christian/groups/${group}.json`;
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const jsonData = request.response;
        createVideo(jsonData) 
      }
}

//crea el banner
function createVideo(data) {

        //nombra al benner que se mostrara
        let number = Math.floor(Math.random() * (5 - 0)) + 0;

        let tag = document.querySelector("iframe"); 

        console.log(data[number].video)

        tag.setAttribute("src", data[number].video);
     
}