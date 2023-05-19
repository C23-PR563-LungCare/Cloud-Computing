//require('@google-cloud/debug-agent').start();

const express = require('express')
const app = express()
const recordRouter = require('./routes/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(recordRouter);
app.get('/', (req, res) => {
  res.send('Response succescful');
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`);
})