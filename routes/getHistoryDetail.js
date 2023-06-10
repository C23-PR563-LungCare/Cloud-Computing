const express = require('express');
const router = express();
const auth = require('../controller/auth');

const getHistoryDetailController = require ('../controller/getHistoryDetailController');

router.get('/detailHistory/:id', auth, getHistoryDetailController.getHistoryDetailHandler);
router.get('/testAuth', auth, (req, res) => {
    res.send(req.user);
})

module.exports = router;