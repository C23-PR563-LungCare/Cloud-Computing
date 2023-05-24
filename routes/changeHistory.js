const express = require('express');
const router = express.Router();

const changeHistoryController = require ('../controller/changeHistoryController');

router.put('/history/:username', changeHistoryController.changeRouterHandler);

module.exports  = router;