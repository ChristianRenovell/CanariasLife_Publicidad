//conprobar la franja horaria en que estamos
var d = new Date();
let min = d.getMinutes()
if(min >= 0 && min <=5) gettJson("group1");
if(min > 5 && min <=10) gettJson("group2");
if(min > 10 && min <=15) gettJson("group3");
if(min > 15 && min <=20) gettJson("group4");
if(min > 20 && min <=25) gettJson("group5");
if(min > 25 && min <=30) gettJson("group6");
if(min > 30 && min <=35) gettJson("group7");
if(min > 35 && min <=40) gettJson("group8");
if(min > 40 && min <=45) gettJson("group9");
if(min > 45 && min <=50) gettJson("group10");
if(min > 50 && min <=55) gettJson("group11");
if(min > 55 && min <=60) gettJson("group12");


//reibe datos json
function gettJson(group){

    const requestURL = `https://raw.githubusercontent.com/ChristianRenovell/CanariasLife_Publicidad/Christian/groups/${group}.json`;
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const jsonData = request.response;
        createBanner(jsonData) 
      }
}

//crea el banner
function createBanner(data) {

        //nombra al benner que se mostrara
        let number = Math.floor(Math.random() * (5 - 0)) + 0;

        let tag = document.querySelector("img"); 

        console.log(data[number].banner)

        tag.setAttribute("src", ""+data[number].banner+"");
        //tag.setAttribute("src","https://previews.123rf.com/images/tul/tul1706/tul170600011/79563965-concepto-de-dise%C3%B1o-de-banner-de-moda-vector-m%C3%BAsica-estilo-moderno-con-iconos-de-arte-de-l%C3%ADnea-fina-sobre-fond.jpg");

}


