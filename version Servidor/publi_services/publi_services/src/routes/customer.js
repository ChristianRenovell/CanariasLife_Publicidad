const router = require('express').Router();
const customerController = require('../controllers/customerController');

//Rutas del admin panel.
router.get('/publi_services', customerController.index);
router.get('/publi_services/list/:value/:value2', customerController.list);
router.get('/publi_services/report/:id/:nameBanner/:nameVideo', customerController.report);
router.get('/publi_services/updateView/:id/:value/:value2', customerController.edit);
router.post('/publi_services/update/:id/:value/:value2', customerController.update);
router.get('/publi_services/clearBanner/:id/:value/:value2', customerController.clearBanner);
router.get('/publi_services/clearVideo/:id/:value/:value2', customerController.clearVideo);


//Rutas del los reportes en PDF
router.get('/publi_services/reportpdfBanner/:id/:nameBanner', customerController.reportPDFBanner);
router.get('/publi_services/reportpdfVideo/:id/:nameVideo', customerController.reportPDFVideo);

//Rutas del Frontend.
router.post('/publi_services/list/:nm1/:nm2', customerController.listData);
router.post('/publi_services/loggerBanner/:id', customerController.loggerBanner);
router.post('/publi_services/loggerVideo/:id', customerController.loggerVideo);


//rutas de del CRUD no utilizadas
//router.post('/add', customerController.save);


module.exports = router;

