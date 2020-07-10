const router = require('express').Router();


const customerController = require('../controllers/customerController');

router.get('/', customerController.index);
router.get('/report/:id/:name', customerController.report);
router.get('/list/:value/:value2', customerController.list);
router.post('/list/:nm1/:nm2', customerController.listData);
router.post('/loggerBanner/:id', customerController.loggerBanner);
router.post('/loggerVideo/:id', customerController.loggerVideo);
router.post('/add', customerController.save);
router.get('/update/:id/:value/:value2', customerController.edit);
router.post('/update/:id/:value/:value2', customerController.update);
router.get('/delete/:id', customerController.delete);
router.get('/reportpdf/:id/:name', customerController.reportPDF);

module.exports = router;

