const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      historypromotersVideos = require('./src/historyPromotersVideos'),
      historypromotersBanner = require('./src/historyPromotersBanner');

    
const app = express();

// importing routes
const customerRoutes = require('./src/routes/customer');

// settings
app.use(cors());
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'canariasLife'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
