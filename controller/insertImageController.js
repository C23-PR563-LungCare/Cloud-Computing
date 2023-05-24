const express = require('express');
const axios = require('axios');
const db = require('../config/dbconfig')


const handleUploadtoGCS = (req, res) =>{
    const username = req.body.username;
    const id = `${username}${Date.now()}`;
    const data = req.body;
    if(req.file && req.file.cloudStoragePublicUrl){
        data.imageURL = req.file.cloudStoragePublicUrl
    }

    const query = "INSERT INTO data_user (id, username, gcsLink) values (?, ?, ?)";

    db.query(query, [id, username, data.imageURL], (err, rows, fields)=>{
        if(err){
            res.status(500).send({message: err.sqlMessage})
        }else{
            res.send({message: 'Insert Successfully'})
        }
    })
}

module.exports = {handleUploadtoGCS};


// axios.post('',{
//     username: username,
//     date: date,
//     images: data
// })
// .then(response => res.send(response))
// .catch(err => res.send(err))

//contoh menggunakan method get
// axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(function (res){
//         console.log(res.data);
//     })
//     .catch(function (err){
//         console.log(err);
//     })
//     .finally(function(){
//         //console.log('selesai');
//     })