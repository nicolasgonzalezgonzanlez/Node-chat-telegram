const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
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
})
/* 
const model = mongoose.model('Message', mySchema)
module.exports = model; */
module.exports = mongoose.model('Message', mySchema);
