const express = require('express');
const router = express();
const auth = require('../controller/auth');

router.get('/getUser', auth, (req, res) => {
    res.status(200).send({
        username: req.user  
    })
});

module.exports = router;