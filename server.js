var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());


app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome my friend');
})





app.listen(port, () => {
    console.log(`My server is now working on port ${port} ....`);
})