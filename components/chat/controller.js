const store = require('./store');

function addChat(users) {
  if(!users || !Array.isArray(users)) return Promise.reject('Invalid user list')

  const newChat = {
    users
  }

  return store.add(newChat)
}

function getChat (userId) {
  return store.list(userId)
}

module.exports = {
  addChat,
  getChat
}