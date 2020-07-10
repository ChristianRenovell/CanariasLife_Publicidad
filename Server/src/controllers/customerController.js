const controller = {};
const pdf = require('html-pdf');
let path = require("path");
let ejs = require("ejs");
const { Console } = require('console');

let dataBanner = [];
controller.reportPDFBanner = (req, res) => {
  var content;

  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM historyBanner WHERE id = ?", req.params.id, (err, historyBanner) => {
      if (err) {
        res.json(err);
      }
      content = historyBanner;
      ejs.renderFile(path.join(__dirname, '../views/', "report-Banner.ejs"), {
        dataBanner: content,
        name: req.params.name

      }, (err, data) => {
        if (err) {

          res.send(err);
        } else {
          pdf.create(data).toFile("report.pdf", function (err, data) {
            if (err) {
              console.log("pete al crear pdf")
              res.send(err);
            } else {
              res.send("File created successfully");
            }
          });
        }
      });
    });
  });
};
//pagina principal
controller.index = (req, res) => {
  res.render('index');
};

//muestra los componentes de un --grupo
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(`SELECT * FROM clientes where id BETWEEN ${req.params.value} AND ${req.params.value2};`, (err, customers) => {
      if (err) {
        res.json(err);
      }
      res.render('customers', {
        data: customers,
        value: req.params.value,
        value2: req.params.value2
      });
    });
  });
};

//muestra los registros del historial
controller.report = (req, res) => {
  let dataBanner;
  let dataVideo;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM historyBanner WHERE id = ?", req.params.id, (err, dataHistoryBanner) => {
      dataBanner = dataHistoryBanner;
    });

    conn.query("SELECT * FROM historyVideo WHERE id = ?", req.params.id, (err, dataHistoryVideo) => {
      dataVideo = dataHistoryVideo;
      res.render('reports', {
        dataBanner,
        dataVideo,
        name: req.params.name,
        id: req.params.id
      })
    });
  });
};


//devuelve los 5 clientes de la franja horaria para mostrarlos en el frontend
controller.listData = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(`SELECT * FROM clientes where id BETWEEN ${req.params.nm1} AND ${req.params.nm2};`, (err, customers) => {
      if (err) {
        res.json(err);
      }
      res.json(customers);
    });
  });
};

//registra las  banner 
controller.loggerBanner = (req, res) => {

  let now;
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  now = `${year}-${month}-${day}`;

  let grupDateHours = now + ' ' + hora;

  req.getConnection((err, conn) => {
    //INSERT INTO history (`id` , `dataBanner`) VALUES ( '2' , '2020-07-07 18:19:00')
    conn.query(`INSERT INTO historyBanner ( id , date)  VALUES ('${req.params.id}','${grupDateHours}')`, (err) => {
      if (err) {
        res.json(err);
      }
      console.log("guardado")
    });
  })
};


//registra visualizaciones del video
controller.loggerVideo = (req, res) => {

  let now;
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  now = `${year}-${month}-${day}`;

  let grupDateHours = now + ' ' + hora;

  req.getConnection((err, conn) => {

    conn.query(`INSERT INTO historyVideo ( id , date)  VALUES ('${req.params.id}','${grupDateHours}')`, (err) => {
      if (err) {
        res.json(err);
      }
      console.log("guardado")
    });
  })
};



controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO clientes set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM clientes WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0],
        value: req.params.value,
        value2: req.params.value2
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

    conn.query('UPDATE clientes set ? where id = ?', [newCustomer, id], (err, rows) => {
      res.redirect(`/list/${req.params.value}/${req.params.value2}`);
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM clientes WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
