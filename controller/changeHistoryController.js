const express = require('express');
const router = express.Router();

const changeRouterHandler = (req,res) => {
    const username = req.params.username;
    console.log(username);
    res.status(200).send(username);
}

//router to change the detail of user's file data. the change might be the result of processResult
// router.put('/history/:username', (req,res) => {
//     const username = req.params.username;
//     console.log(username);
//     res.status(200).send(username);
// })

module.exports = { changeRouterHandler };