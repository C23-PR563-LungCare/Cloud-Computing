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


    axios.post('https://model-api-dss5xq2j5q-et.a.run.app/testingModel', {
        image: buff
      })
      .then(function (response) {
        const prediction = response.data.predictions[0];
        maxData = (Math.max(...prediction));
        let result;
        indexData = (prediction.indexOf(maxData)) + 1;

        if(indexData === 1){
          result = "Covid-19";
        }else if(indexData === 2){
          result = "Normal";
        }else if(indexData === 3){
          result = "Pneumonia"
        }
        
        const query = "INSERT INTO data_user (id, username, gcsLink, processResult) values (?, ?, ?, ?)";

        db.query(query, [id, username, data.imageURL, result], (err, rows, fields)=>{
            if(err){
                res.status(500).send({message: err.sqlMessage})
            }else{
                res.send({message: 'Result Found',
              id: id,
            username: username,
          gcsLink: data.imageURL,
        result:result})
            }
        })

      })
      .catch(function (error) {
        console.log(error);
      });

    
}

module.exports = {handleUploadtoGCS};