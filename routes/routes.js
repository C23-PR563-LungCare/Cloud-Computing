const express = require('express');
const axios = require('axios');
const router = express.Router();
const Multer = require('multer');
const imgUpload = require('../modules/modules');

const storage = Multer.memoryStorage();
const multer = Multer({
    storage: storage,
    fileSize: 5 * 1024 * 1024
})

router.post('/insertImage', multer.single('image'), imgUpload.uploadtogcs, (req,res,next)=>{
    let username = req.body.username;
    let date = Date.now();
    
    let data;
    if(req.file && req.file.cloudStoragePublicUrl){
        data = req.file.cloudStoragePublicUrl
    }
    
    //TODO masukkan link app engine dennis
    axios.post('',{
        username: username,
        date: date,
        images: data
    })
    .then(response => res.send(response))
    .catch(err => res.send(err))
    
})

module.exports = router;


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