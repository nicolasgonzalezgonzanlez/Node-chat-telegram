const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/route');
const db = require('./db');
const env = require('node-env-file');

env(__dirname + '/.env');

db(process.env.PORT_MONGO);

let app = express();
app.use(bodyParser.json());
router(app)

app.use('/app', express.static('public'))

const port = process.env.PORT_SERVER || 3001

app.listen(port);

console.log(`The app is running in the port: ${port}`);
