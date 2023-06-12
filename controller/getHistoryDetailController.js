const db = require('../model/db');

const getHistoryDetailHandler = (req,res) => {
    const id = req.params.id;

    const query = `select id, date, gcsLink, processResult from data_user where id = ?`
    db.query(query, [id],(err, rows, field) =>{
        if(err){
            res.status(500).send({message: err.sqlMessage});
        }else{
            res.json(rows[0]);
        }
    })
}

module.exports = { getHistoryDetailHandler };