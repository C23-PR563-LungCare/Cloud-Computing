const db = require('./db')
const axios = require('axios');

const handleUploadtoGCS = (req, res) =>{
    const username = req.user;
    const id = `${username}${Date.now()}`;
    const data = req.body;
    if(req.file && req.file.cloudStoragePublicUrl){
        data.imageURL = req.file.cloudStoragePublicUrl
    }

    //Encode image buffer 
    let buff = Buffer.from(req.file.buffer);
    let testing = buff.toString('base64');


    axios.post('https://model-api-dss5xq2j5q-et.a.run.app/testingModel', {
        image: buff
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

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