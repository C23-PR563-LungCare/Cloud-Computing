const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));

//post
app.use('/insertImage', require('./routes/insertImage'));

//put
app.use(require('./routes/changeHistory')); //"/history/:username"

//get
app.use(require('./routes/getHistory')); //"/history/:username"


app.get('/', (req, res) => {
  res.send('Response successful');
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`);
})