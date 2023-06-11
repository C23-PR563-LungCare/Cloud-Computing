const db = require('../model/db');

const getNewsHandler = (req,res) => {
    const category = req.params.category;

    const query = `select newsID, newsCategory, title, newsURL, imageURL from news where newsCategory = ?`
    db.query(query, [category],(err, rows, field) =>{
        if(err){
            res.status(500).send({message: err.sqlMessage});
        }else{
            res.json(rows)
        }
    })
}

module.exports = { getNewsHandler };