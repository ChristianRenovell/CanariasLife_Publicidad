var mysql = require('mysql');
const CronJob = require('cron').CronJob;

//Definicion de Conexion.
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysql',
    port: 3306,
    database: 'canariasLife'
});

function getDate() {
    //capturamos la fecha
    let now;
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    now = `${year}-${month}-${day}`;
    let grupDateHours = now + ' ' + hora;
    return grupDateHours;
}
//Recibe los promotores activos.
function querrysGett() {
    return new Promise(async function (resolve, reject) {
        var query = await connection.query('SELECT * FROM `promoters` WHERE name != ""', function (err, rows) {
            if (err) {
                return reject(err)
            }
            resolve(rows);
        })
    })
}
//Añade los promotores.
function querrysSett(result) {
    return new Promise(async function (resolve, reject) {
        grupDateHours = getDate();
        console.log(`INSERT INTO historypromoters ( id, name, date)  VALUES ('${result[0].id}','${result[0].name}','${grupDateHours})`)
        for (let y = 0; y <= result.length; y++) {
            var query2 = await connection.query(`INSERT INTO historypromoters ( id, name, date)  VALUES ('${result[y].id}','${result[y].name}','${grupDateHours}')`, function (error, result2) {
                if (error) {
                    return reject(err)
                } else {
                    resolve("ok");
                }
            });
        }
    })
}

//Llamada de las consusltas.
//Función programada que almacena promotores.
/*minutos(0-59)
horas(0-23)
día del mes(0-31)
mes(0-12 o nombres)
día de la semana (0-7, 0 es Domingo, o nombres)*/
new CronJob('45 20 * * 1', function() {
 
    connection.connect( function (error) {
        if (error) {
            throw error;
        } else {
            console.log('Conexion correcta.');
        }
    });
    querrysGett().then(function (rows) {
        querrysSett(rows).then(function (result) {
            console.log(result)
            connection.end();
        })
    }).catch((err) => setImmediate(() => { throw err; }));

}, function() {
  // Código a ejecutar cuando la tarea termina. 
  // Puedes pasar null para que no haga nada
}, true);




