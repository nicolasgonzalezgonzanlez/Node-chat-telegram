const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

let app = express();

app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
  console.log(req.headers)
  res.header({
    "custom-header": "nuestro valor personalizado"
  })
  res.send('List message')
})
router.post('/message', (req, res) => {
  console.log(req.query)
  res.send('Add message')
})
/* app.use('/', (req, res) => {
  res.send('Hola')
}) */

app.listen(3000);

console.log('The app is running in the port 3000 ');
