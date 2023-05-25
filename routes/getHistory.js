const express = require('express');
const router = express();
const auth = require('../controller/auth');

const getHistoryController = require ('../controller/getHistoryController');

router.get('/history', auth, getHistoryController.getHistoryHandler);

module.exports = router;