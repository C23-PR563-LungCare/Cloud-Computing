const express = require('express');
const router = express();
const auth = require('../controller/auth');

const getHistoryController = require ('../controller/getHistoryController');

router.get('/history', auth, getHistoryController.getHistoryHandler);
router.get('/testAuth', auth, (req, res) => {
    res.send(req.user);
})

module.exports = router;