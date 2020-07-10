const pdf = require('html-pdf');

console.log("sfo0wjekp")
function doSomething_Click() {
    alert('Click executed');
}

// Obtenemos el botón a partir de su id. En este caso lo llamaremos testButton
var button = document.getElementById('testButton');

// Registramos el evento
button.addEventListener('click', doSomething_Click);

const content = `
<h1>Título en el PDF creado con el paquete html-pdf</h1>
<p>Generando un PDF con un HTML sencillo</p>
`;

pdf.create(content).toFile('./html-pdf.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
});