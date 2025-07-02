// test-client.js
const { io } = require('socket.io-client');

const socket = io('http://localhost:9001');

socket.on('connect', () => {
  console.log('Connected to server');
  socket.emit('messageToServer', 'Hello from client!');
});

socket.on('messageFromServer', (msg) => {
  console.log('Server says:', msg);
});

socket.on('broadcastFromServer', (msg) => {
  console.log('Broadcast:', msg);
});
