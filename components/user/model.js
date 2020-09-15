const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('User', mySchema);
