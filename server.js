var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var noteRouter = require('./route/noteRoute')

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());


app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome my friend');
});

app.use('/api/v1', noteRouter)





app.listen(port, () => {
    console.log(`My server is now working on port ${port} ....`);
})