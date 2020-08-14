//conprobar la franja horaria en que estamos
var d = new Date();
let min = d.getMinutes()
if (min >= 0 && min <= 5) gettJson(0, 5);
if (min > 5 && min <= 10) gettJson(6, 10);
if (min > 10 && min <= 15) gettJson(11, 15);
if (min > 15 && min <= 20) gettJson(16, 20);
if (min > 20 && min <= 25) gettJson(21, 25);
if (min > 25 && min <= 30) gettJson(26, 30);
if (min > 30 && min <= 35) gettJson(31, 35);
if (min > 35 && min <= 40) gettJson(36, 40);
if (min > 40 && min <= 45) gettJson(41, 45);
if (min > 45 && min <= 50) gettJson(46, 50);
if (min > 50 && min <= 55) gettJson(51, 55);
if (min > 55 && min <= 60) gettJson(56, 60);

//reibe datos json
function gettJson(nin1, nin2) {

  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };

  fetch(`https://gesbonos.com/publi_services/list/${nin1}/${nin2}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result, "resultado");
      createVideo(result);
    })
    .catch(error => console.log('error', error));

}

//crea el banner
function createVideo(data) {

  let dataJ = JSON.parse(data)
  //nombra al benner que se mostrara
  let number = Math.floor(Math.random() * (5 - 0)) + 0;

  let tag = document.querySelector("iframe");

  tag.setAttribute("src", dataJ[number].video);

 
  loggerVideo(dataJ[number].id);
}
//almacenamos la visualización del Banner para el informe
function loggerVideo(id) {

  console.log(id, "esto llega al loggerVideo")

  var requestOptions = {
    method: 'POST',
    redirect: 'follow',
  };

  fetch(`https://gesbonos.com/publi_services/loggerVideo/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}