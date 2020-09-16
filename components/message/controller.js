const socket = require('../../socket');
const store = require('./store');
const {socketObject} = require('../../socket');

function addMessage(chat, user, message, file) {
  return new Promise ((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] user or message is not defined')
      return reject('Data is not defined')
    }

    let fileUrl = ''

    if (file) {
      fileUrl=  `${process.env.SERVER_DEV}/app/files/${file.filename}`
    }
    
    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl
    }
    
    store.add(fullMessage)
    //create bridge use socket.io
    socketObject.io.emit('message', fullMessage)

    resolve(fullMessage)
  })
}

function getMessage (filetMessage) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filetMessage))
  })
}

function updateMessage (id, message) {
  return new Promise((resolve, reject) => {
    if (!id || !message) {
      reject('Invalid date')
      return false
    }
    store.updateText(id, message)
      .then((response) => {
        resolve(response)
      })
  })
}

function deleteMessage (id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid id')
      return false
    }
    store.remove(id)
      .then(() => {
        resolve()
      })
      .catch((err) => reject(err))
  })
}
module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage
}