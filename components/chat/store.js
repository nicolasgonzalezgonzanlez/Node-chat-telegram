const Model = require('./model');

function addChat (chat) {
  const newChat = new Model(chat);
  return newChat.save();
}
//get users
function getChat (userId) {
  return new Promise((resolve, reject) => {

    let filter = {};

    if(filter !== null) {
      filter = {users: userId};
    };

    Model.find(filter)
      .populate('users')
      .exec((err, populated) => {
        if(err) {
          reject(err)
          return false
        }
        resolve(populated);
      });
  });
};

module.exports = {
  add: addChat,
  list: getChat
}