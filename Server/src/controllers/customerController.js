const controller = {};


controller.prueba = (req, res) => {

  res.render('prueba', {
    data: req.params
 });
};

controller.index = (req, res) => {

  res.render('index');
};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(`SELECT * FROM clientes where id BETWEEN ${req.params.id} AND ${req.params.id2};`, (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
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
  let hora = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
  
  now = `${year}-${month}-${day}`;
  
  let grupDateHours = now+' '+hora;

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
  let hora = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
  
  now = `${year}-${month}-${day}`;
  
  let grupDateHours = now+' '+hora;

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
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE clientes set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
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
