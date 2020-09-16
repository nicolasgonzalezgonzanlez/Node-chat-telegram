const store = require('./store');

function addChat(users) {
  if(!users) return Promise.reject('Invalid Name')

  const newChat = {
    users
  }

  return store.add(newChat)
}

function getChat (chat) {
  return new Promise((resolve, rejact) => {
    resolve(store.list(chat))
  })
}

module.exports = {
  addChat,
  getChat
}