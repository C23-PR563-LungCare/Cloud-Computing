//require('@google-cloud/debug-agent').start();

const express = require('express')
const app = express()
// const recordRouter = require('./routes/routes');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(recordRouter);

//post
app.use('/insertImage', require('./routes/insertImage'));

//put
app.use(require('./routes/changeHistory')); //"/history/:username"

//get
app.use(require('./routes/getHistory')); //"/history/:username"


app.get('/', (req, res) => {
  res.send('Response succescful');
})
app.get('/:id',(req,res) =>{
  console.log(req.params.id);
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`);
})