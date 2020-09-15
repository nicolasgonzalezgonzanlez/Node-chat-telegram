const store = require('./store');

function addMessage(user, message) {
  return new Promise ((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] user or message is not defined')
      return reject('Data is not defined')
    }
    const fullMessage = {
      user,
      message,
      date: new Date()
    }
    console.log(fullMessage)
    store.add(fullMessage)
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