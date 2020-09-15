const Model = require('./model');

function addMessage (message) {
  const myMessage = new Model(message)
  myMessage.save()
}

async function getMessage (filetMessage) {
  return new Promise((resolve, reject) => {
      let filter = {}
      //filetMessage params query ?user=nameUser
      if (filetMessage !== null) {
        filter = {user: filetMessage}
      }
      //se le pasa un parametro para saber que fiktrar
      Model.find(filter)
        .populate('user')
        .exec((err, populated) => {
          if(err) {
            reject(err)
            return false
          }
          resolve(populated)
        })
  })
}

async function updateText (id, message) {
  const messageUpdate = await Model.findOneAndUpdate(
    {_id: id},
    {message}, 
    {new: true}
  )
  return messageUpdate
}

function removeMessage (id) {
 return Model.findOne({_id: id})
}
module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage

}