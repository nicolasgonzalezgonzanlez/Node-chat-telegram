const store = require('./store');

function addUser(name) {
  if(!name) return Promise.reject('Invalid Name')

  const newUser = {
    name
  }

  return store.add(newUser)
}

function getUser () {
  return new Promise((resolve, rejact) => {
    resolve(store.list())
  })
}

module.exports = {
  addUser,
  getUser
}