const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  chat: {
      type: Schema.ObjectId,
      ref: 'Chat',
      require: true
  },
  user: {
    type:  Schema.ObjectId,
    ref: 'User',
    require: true
  },
  message: {
    type:  String,
    require: true
  },
  date: {
    type:  Date
  },
  file: String
})
/* 
const model = mongoose.model('Message', mySchema)
module.exports = model; */
module.exports = mongoose.model('Message', mySchema);
