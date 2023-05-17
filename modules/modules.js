const {Storage} = require ('@google-cloud/storage');
const fs = require('fs');
const path = require('path');

//path menuju service account
const pathKey = path.resolve('./serviceaccountbucket.json');

const gcs = new Storage({
    projectId: 'lungcare-project-testing',
    ketFilename: pathKey
})

const bucketName = 'bucket-upload-testing';
const bucket = gcs.bucket(bucketName);

function getPublicUrl(filename){
    return 'https://storage.googleapis.com/'+bucketName+'/'+filename;
}

let imgUpload ={};

imgUpload.uploadtogcs = (req, res, next) =>{
    if(!req.file) return next()


const gcsname = "bebas"
const stream = file.createWriteStream({
    metadata:{
        contentType: req.file.mimetype
    }
})

stream.on('error', (err) =>{
    req.file.cloudStorageError = err
    next(err)
})

stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname
    req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
    next()
})

stream.end(req.file.buffer)
}

module.exports = imgUpload