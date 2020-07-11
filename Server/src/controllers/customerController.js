const controller = {};
const pdf = require('html-pdf');
const path = require("path");
const ejs = require("ejs");

//pagina principal
controller.index = (req, res) => {
  res.render('index');
};

//muestra los componentes de un grupo.
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

//muestra los registros del historial de los videos y los Banners.
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

//Genera Reportes del Historial de las visualizaciones de los videos.
controller.reportPDFVideo = (req, res) => {
  var content;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM historyVideo WHERE id = ?", req.params.id, (err, historyVideo) => {
      if (err) {
        res.json(err);
      }
      content = historyVideo;
      ejs.renderFile(path.join(__dirname, '../views/', "report-Video.ejs"), {
        dataVideo: content,
        name: req.params.name
      }, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          pdf.create(data).toFile("report_Video.pdf", function (err, data) {
            if (err) {
              res.send(err);
            } else {
              var file = path.join(__dirname, '../../', "report_Video.pdf");
              res.download(file);
            }
          });
        }
      });
    });
  });
};

//Genera Reportes del Historial de las visualizaciones de los Banners.
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
          pdf.create(data).toFile("report_Banner.pdf", function (err, data) {
            if (err) {
              res.send(err);
            } else {
              var file = path.join(__dirname, '../../', "report_Banner.pdf");
              res.download(file);
            }
          });
        }
      });
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
