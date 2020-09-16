const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req, res) => {
  controller.addChat(req.body.users)
    .then(newChat => {
      response.success(req, res, newChat, 201);
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err)
    })
})
router.get('/', (req, res) => {
  const filterChat = req.query.chat || null
  controller.getChat(filterChat)
    .then(chats => {
      response.success(req, res, chats, 201);
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err)
    })
})


module.exports = router;
