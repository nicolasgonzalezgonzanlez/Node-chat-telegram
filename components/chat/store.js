const Model = require('./model');

function addChat (chat) {
  const newChat = new Model(chat);
  return newChat.save()
}
//get users
function getChat (chat) {
  return new Promise((resolve, reject) => {

    const filter = {}

    if(chat !== null) {
      filter = {chat: chat}
    }
    Model.find(filter)
        .populate('users')
        .exec((err, populated) => {
          if(err) {
            reject(err)
            return false
          }
          resolve(populated)
        })
  })
}

module.exports = {
  add: addChat,
  list: getChat
}