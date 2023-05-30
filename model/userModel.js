const db = require('./db');

const User = function (user) {
    this.username = user.username;
    this.password = user.password;
};

User.createUser = (newUser, result) => {
    db.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created user: ", {...newUser});
        result(null, {...newUser});
    });
};

User.findByUsername = (username) => {
    return new Promise((resolve, reject)=>{
        db.query(`SELECT * FROM users WHERE username='${username}'`, (err, res) => {
            if (err) {
                return reject(err);
            }
            if (res.length) {
                console.log("found user: ", res[0]);
                return resolve({kind: 'found', username: res[0].username, password: res[0].password});
            }
            return resolve({kind: 'not_found'});
        })
    })
    
}

module.exports = User;