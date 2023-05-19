const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongodbConnection=require('./db/dbConnection')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
    const data = req.body;
    res.send(`Hello ${data.name}!`);
});
const routes=require('./routes/routes')(app);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});