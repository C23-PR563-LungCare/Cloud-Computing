const express = require('express');
const router = express.Router();
const multer = require('../model/multerModel');
const auth = require('../controller/auth');
const uploadToGCS = require('../model/uploadToGCS');

const insertImageContoller = require('../controller/insertImageController');

router.post('/', multer.single('image'), auth, uploadToGCS.uploadtogcs, insertImageContoller.handleUploadtoGCS);

module.exports = router;