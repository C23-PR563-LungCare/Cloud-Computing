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

//router to change the detail of user's file data. the change might be the result of processResult
router.put('/history/:username', (req,res) => {
    const username = req.params.username;
    console.log(username);
    res.status(200).send(username);
})

router.get('/history/:username', (req,res) =>{
    const username = req.params.username;

    const query = `select date, gcsLink, processResult from data_user where username = ?`
    db.query(query, [username],(err, rows, field) =>{
        if(err){
            res.status(500).send({message: err.sqlMessage});
        }else{
            res.json(rows)
        }
    })
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
                res.send({message: 'Insert Successfully'})
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