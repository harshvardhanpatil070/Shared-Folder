// server.js
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Emit the message to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
