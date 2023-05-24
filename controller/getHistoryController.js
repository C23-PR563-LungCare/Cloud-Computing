const db= require('../config/dbconfig');

const getHistoryHandler = (req,res) => {
    const username = req.params.username;
    console.log(username);

    const query = `select date, gcsLink, processResult from data_user where username = ?`
    db.query(query, [username],(err, rows, field) =>{
        if(err){
            res.status(500).send({message: err.sqlMessage});
        }else{
            res.json(rows)
        }
    })
}

// router.get('/history/:username', (req,res) =>{
//     const username = req.params.username;

//     const query = `select date, gcsLink, processResult from data_user where username = ?`
//     db.query(query, [username],(err, rows, field) =>{
//         if(err){
//             res.status(500).send({message: err.sqlMessage});
//         }else{
//             res.json(rows)
//         }
//     })
// })

module.exports = { getHistoryHandler };