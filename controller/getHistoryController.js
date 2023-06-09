const db = require('../model/db');

const getHistoryHandler = (req,res) => {
    const username = req.user;

    const query = `select id, date, gcsLink, processResult from data_user where username = ?`
    db.query(query, [username],(err, rows, field) =>{
        if(err){
            res.status(500).send({message: err.sqlMessage});
        }else{
            res.json(rows)
        }
    })
}

module.exports = { getHistoryHandler };