const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const response = require('../../network/response');
const controller = require('./controller');

const storage = multer.diskStorage({
  destination:  "public/files/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage })

//get message
router.get('/', (req, res) => {
  let filetMessage = {}

  if (req.query.user !== undefined) {
    filetMessage = {
      request: req.query.user,
      filter: 'user'
    }
  } else if (req.query.chat !== undefined) {
    filetMessage = {
      request: req.query.chat,
      filter: 'chat'
    }
  }

  controller.getMessage(filetMessage)
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected Error', 500, err )
    })
})
//create message
router.post('/', upload.single('file'), (req, res) => {

  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
      response.success(req, res, `Add message: ${fullMessage.user}`, 201)
    })
    .catch((err) => {
      response.error(req, res, 'Information invalid', 400, 'Error post message')
    })
  
})
//update message for id

router.patch('/:id', (req, res) => {
  console.log(req.params.id)
  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch((err) => {
      response.error(req, res, 'unexpected Error', 500, err)
    })
})

//delete message for id

router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, 'The message was deleted', 200)
    })
    .catch((err) => {
      response.error(req, res, 'unexpected Error', 500, err)
    })
})
module.exports = router;
