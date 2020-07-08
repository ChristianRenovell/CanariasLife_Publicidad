const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/list', customerController.list);
router.get('/', customerController.index);
router.post('/list/:nm1/:nm2', customerController.listData);
router.post('/loggerBanner/:id', customerController.loggerBanner);
router.post('/loggerVideo/:id', customerController.loggerVideo);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

module.exports = router;

