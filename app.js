const express = require('express')
const app = express()
const recordRouter = require('./routes/routes');


app.use(recordRouter);
app.get('/', (req, res) => {
  res.send('Response succescful');
})

const port = process.env.port || 8000
app.listen(port, () => {
    console.log("Server is up and listening on " + port)
})