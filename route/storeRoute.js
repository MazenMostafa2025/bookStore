const storeController = require('../controller/storeController');

var express = require('express');
const router = express.Router();

router.get('/stores', storeController.getStores);
router.post('/stores/create', storeController.createStore);
// router.put('/stores/update', storeController);
// router.delete('/stores/delete', storeController);
module.exports = router;