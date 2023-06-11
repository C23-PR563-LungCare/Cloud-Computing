const express = require('express');
const router = express();
const auth = require('../controller/auth');

const getNewsHandler = require ('../controller/getNewsController');

router.get('/news/:category', auth, getNewsHandler.getNewsHandler);
router.get('/testAuth', auth, (req, res) => {
    res.send(req.user);
})

module.exports = router;