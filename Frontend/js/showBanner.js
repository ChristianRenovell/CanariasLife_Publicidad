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


/*------------------------
--------------------------
FALTA MODIFICAR PARAMETROS ENVIADOS POR FRANJA HORARIA Y MODIFICAR 
LA RUTA DEL SERVIDOR PARA QUE DEVUELVA 5 EN FUNCION E ESTOS PARAMETROS
---------------------------
--------------------------*/


//reibe datos json
function gettJson(group){

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/list", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result,"resultado");
      createBanner(result);

    })
    .catch(error => console.log('error', error));
    
}

//crea el banner
function createBanner(data) {

        let dataJ = JSON.parse(data)
        //nombra al benner que se mostrara
        let number = Math.floor(Math.random() * (5 - 0)) + 0;

        let tag = document.querySelector("img");

        
        console.log(dataJ[number].banner)

        tag.setAttribute("src", data[number].banner);

        loggerBanner(data[number].id);
}
//almacenamos la visualización del Banner para el informe
function loggerBanner(id){

  
}

