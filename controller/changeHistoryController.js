const express = require('express');
const router = express.Router();

const changeRouterHandler = (req,res) => {
    const username = req.params.username;
    res.status(200).send(username);
}

module.exports = { changeRouterHandler };