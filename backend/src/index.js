const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes)

app.use(express.json)

app.listen(process.env.PORT || 3000,() => {
    console.log('Listenning to requests on port 3000');
});