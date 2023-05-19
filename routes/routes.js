const express = require('express');
const axios = require('axios');
const router = express.Router();
const Multer = require('multer');
const imgUpload = require('../modules/modules');
const db = require('../modules/database');

const storage = Multer.memoryStorage();
const multer = Multer({
    storage: storage,
    fileSize: 5 * 1024 * 1024
})

router.post('/insertImage', multer.single('image'), imgUpload.uploadtogcs, (req,res,next)=>{
    const username = req.body.username;
    const id = `${username}${Date.now()}`;
    const data = req.body;
    if(req.file && req.file.cloudStoragePublicUrl){
        data.imageURL = req.file.cloudStoragePublicUrl
    }

    const query = "INSERT INTO data_user (id, username, gcsLink) values (?, ?, ?)";

    axios.post('https://users-dot-lungcare-project-testing.et.r.appspot.com/login',{
        username: username
    })
    .then(response => {
        db.query(query, [id, username, data.imageURL], (err, rows, fields)=>{
            if(err){
                res.status(500).send({message: err.sqlMessage})
            }else{
                res.send({message: 'Insert Sucessfully'})
            }
        })
    })
    .catch(error => res.status(404).send({message: error.code}));
    
})

module.exports = router;


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