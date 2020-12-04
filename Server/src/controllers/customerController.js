const controller = {};
const pdf = require('html-pdf');
const path = require("path");
const ejs = require("ejs");
const { Console } = require('console');
const puppeteer = require('puppeteer');
const nodemailer = require("nodemailer");

//pagina principal
controller.index = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(`SELECT * FROM promoters`, (err, customers) => {
      if (err) {
        res.json(err);
      }
      res.render('index', {
        data: customers,
      });
    });
  });
};

//muestra los componentes de un grupo.
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(`SELECT * FROM promoters where id BETWEEN ${req.params.value} AND ${req.params.value2};`, (err, customers) => {
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
  console.log(req.params.dateStart,"fecha start")
  console.log(req.params.dateEnd,"fecha end")
  req.getConnection((err, conn) => {
    
    conn.query(`select * from historybanner where id = ${req.params.id} and CAST(date AS DATE) between '${req.params.dateStart}' and '${req.params.dateEnd}'`, (err, dataHistoryBanner) => {
      dataBanner = dataHistoryBanner;
    });
    conn.query(`select * from historyVideo where id = ${req.params.id} and CAST(date AS DATE) between '${req.params.dateStart}' and '${req.params.dateEnd}'`, (err, dataHistoryVideo) => {
      dataVideo = dataHistoryVideo;
      res.render('reports', {
        dataBanner,
        dataVideo,
        nameBanner: req.params.nameBanner,
        nameVideo: req.params.nameVideo,
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
        nameVideo: req.params.nameVideo
      }, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          pdf.create(data).toFile("src/report_Video.pdf", function (err, data) {
            if (err) {
              res.send(err);
            } else {
              var file = path.join(__dirname, '../', "report_Video.pdf");
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
        nameBanner: req.params.nameBanner
      }, (err, data) => {
        if (err) {

          res.send(err);
        } else {
          pdf.create(data).toFile("src/report_Banner.pdf", function (err, data) {
            if (err) {
              res.send(err);
            } else {
              var file = path.join(__dirname, '../', "report_Banner.pdf");
              res.download(file);
            }
          });
        }
      });
    });
  });
};

//pruebas genera PNG envia directamente al navegador
controller.reportPNG = (req, res) => {

  (async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(`http://localhost:3000/report/${req.params.id}/${req.params.name}`);

      await page.screenshot({ path: 'example.png' });

      let file = await path.join(__dirname, '../../', "example.png");
      console.log("encontre el archivo")
      await res.download(file);
      console.log("pase el envio")
      await browser.close();
    } catch{
      console.log("sali al catch")
    }
  })();

};

//pruebas genera PDF envia directamente al navegador
/*controller.reportPDF = (req, res) => {

  (async () => {
    try{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000/report/${req.params.id}/${req.params.name}`, {waitUntil: 'networkidle2'});
    await page.pdf({path: 'report.pdf', format: 'A4'});
    
    let file = await path.join(__dirname, '../../', "report.pdf");
    
    await res.download(file);
    
    await browser.close();
  }catch{
    await browser.close();
    console.log("error")
  }
  })();
 
};*/

//pruebas genera PDF envia por correo el pdf
controller.reportPDF = (req, res) => {

  (async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(`http://localhost:3000/report/${req.params.id}/${req.params.name}`, { waitUntil: 'networkidle2' });
      await page.pdf({ path: 'report.pdf', format: 'A4' });
      await browser.close();

      await sendMail();

      backURL = req.header('Referer') || '/';
      // do your thang
      res.redirect(backURL);

    } catch{

      await browser.close();
      console.log("error")
    }
  })();

};

function sendMail() {

  // Definimos el transporter
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'christiancand@gmail.com',
      pass: 'mdhnnzfpkxxoptrj'
    }
  });
  // Definimos el email
  var mailOptions = {
    from: 'christiancand@gmail.com',
    to: 'christianrenovell83@gmail.com',
    subject: 'pruebas email',
    text: 'esto es una prueba de nodemailer',
    attachments: [{
      filename: 'report.pdf',
      path: (__dirname, '../../', "report.pdf"),
      contentType: 'application/pdf'
    }]
  };
  // Enviamos el email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send(500, err.message);
    } else {

      console.log("Email sent");

      res.status(200).jsonp(req.body);
    }
  });
}


//devuelve los 5 clientes de la franja horaria para mostrarlos en el frontend
controller.listData = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(`SELECT * FROM promoters where id BETWEEN ${req.params.nm1} AND ${req.params.nm2};`, (err, customers) => {
      if (err) {
        res.json(err);
      }
      res.json(customers);
    });
  });
};

//registra l0s  banner 
controller.loggerBanner = (req, res) => {

  let now;
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  now = `${year}-${month}-${day}`;

  let grupDateHours = now + ' ' + hora;

  console.log(grupDateHours)

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

//Redirecciona a la vista de editar promotor
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM promoters WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0],
        value: req.params.value,
        value2: req.params.value2
      })
    });
  });
};

//Actualiza los cambios echos en el promotor
controller.update = (req, res) => {
  const { id } = req.params;
  console.log()
  const newCustomer = req.body;
  console.log(req.body);
  req.getConnection((err, conn) => {
    conn.query('UPDATE promoters set ? where id = ?', [newCustomer, id], (err, rows) => {
      res.redirect(`/list/${req.params.value}/${req.params.value2}`);
    });
  });
};


/*controller.clear = (req, res) => {
  console.log("entro en la llamada")
  const { id } = req.params;
  req.getConnection((err, connection) => {

    connection.query(`UPDATE promoters SET id = ${req.params.id} ,nameBanner="", banner="",linkBanner="",nameVideo="",video="",linkVideo="" WHERE id = ${req.params.id}`, (err, rows) => {
      console.log("posicion sin datos de promotor")
    });
    connection.query(`DELETE FROM historybanner WHERE id = ${req.params.id}`, (err, rows) => {
      console.log("eliminado historial banner")
    });
    connection.query(`DELETE FROM historyvideo WHERE id = ${req.params.id}`, (err, rows) => {
      console.log("eliminado historial videos")
      res.redirect(`/list/${req.params.value}/${req.params.value2}`);
    });
  });
}*/

controller.clearBanner = (req, res) => {
  console.log("clear Banner")
  const { id } = req.params;
  req.getConnection((err, connection) => {

    connection.query(`UPDATE promoters SET id = ${req.params.id} ,nameBanner="", banner="",linkBanner="" WHERE id = ${req.params.id}`, (err, rows) => {
      
    });
    connection.query(`DELETE FROM historybanner WHERE id = ${req.params.id}`, (err, rows) => {
      
      res.redirect(`/list/${req.params.value}/${req.params.value2}`);
    });
  });
}

controller.clearVideo = (req, res) => {
  console.log("clear Video")
  const { id } = req.params;
  req.getConnection((err, connection) => {

    connection.query(`UPDATE promoters SET id = ${req.params.id} ,nameVideo="",video="",linkVideo="" WHERE id = ${req.params.id}`, (err, rows) => {

    });
    connection.query(`DELETE FROM historyvideo WHERE id = ${req.params.id}`, (err, rows) => {

      res.redirect(`/list/${req.params.value}/${req.params.value2}`);
    });
  });
}

//elimina registro-------
/*controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM promoters WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

/*controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO promoters set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};*/

module.exports = controller;
