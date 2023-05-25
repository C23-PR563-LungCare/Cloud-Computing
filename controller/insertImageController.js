const db = require('../model/db')



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