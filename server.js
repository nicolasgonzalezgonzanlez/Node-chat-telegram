const bodyParser = require('body-parser');
const env = require('node-env-file');
const cors = require('cors');

const express = require('express');
const app = express();
const server = require('http').Server(app);
const {connect} = require('./socket');

const router = require('./network/route');
const db = require('./db');

env(__dirname + '/.env');

db(process.env.PORT_MONGO);

app.use(cors());

app.use(bodyParser.json());

connect(server)
router(app);

app.use('/app', express.static('public'));

const port = process.env.PORT_SERVER || 3001;

server.listen(port, () => {
  console.log(`The app is running in the port: ${port}`);
});

