const express = require('express');
const router = express.Router();
const Multer = require('multer');
const imgUpload = require('../modules/modules');

const storage = Multer.memoryStorage();
const multer = Multer({
    storage: storage,
    fileSize: 5 * 1024 * 1024
})

router.post('/uploadImage', multer.single('image'), imgUpload.uploadtogcs, (req,res,next)=>{
    const data = req.body;
    if(req.file && req.file.cloudStoragePublicUrl){
        data.imageUrl = req.file.cloudStoragePublicUrl
    }

    res.send(data)
})

module.exports = router;