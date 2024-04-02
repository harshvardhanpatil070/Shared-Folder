// src/socketService.js
import io from 'socket.io-client';

// Connect to your server (replace 'http://localhost:3000' with your actual server URL)
const socket = io('http://localhost:3000', { autoConnect: false });

function connectSocket() {
  socket.connect();
}

function disconnectSocket() {
  if(socket.connected) {
    socket.disconnect();
  }
}

function subscribeToChat(cb) {
  // Listen for 'chat message' events from the server
  socket.on('chat message', msg => {
    console.log('Received message:', msg);
    cb(msg);
  });
}

function sendMessage(msg) {
  // Emit a 'chat message' event to the server
  socket.emit('chat message', msg);
}

export { connectSocket, disconnectSocket, subscribeToChat, sendMessage };
