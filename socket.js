const socketIo = require('socket.io');

const socketObject = {};

function connect (server) {
  socketObject.io = socketIo(server)
};

module.exports = {
  connect,
  socketObject,
};
