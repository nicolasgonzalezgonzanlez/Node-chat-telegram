const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  users: [{
    type: Schema.ObjectId,
    ref: 'User'
  }]
})

module.exports = mongoose.model('Chat', mySchema);
