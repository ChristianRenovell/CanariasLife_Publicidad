const router = require('express').Router();
const customerController = require('../controllers/customerController');

//Rutas del admin panel.
router.get('/', customerController.index);
router.get('/list/:value/:value2', customerController.list);
router.get('/report/:id/:name', customerController.report);
router.get('/updateView/:id/:value/:value2', customerController.edit);
router.post('/update/:id/:value/:value2', customerController.update);
router.get('/clear/:id/:value/:value2', customerController.clear);

//Rutas del los reportes en PDF
router.get('/reportpdfBanner/:id/:name', customerController.reportPDFBanner);
router.get('/reportpdfVideo/:id/:name', customerController.reportPDFVideo);

//Rutas del Frontend.
router.post('/list/:nm1/:nm2', customerController.listData);
router.post('/loggerBanner/:id', customerController.loggerBanner);
router.post('/loggerVideo/:id', customerController.loggerVideo);



//rutas de del CRUD no utilizadas
//router.post('/add', customerController.save);


module.exports = router;

