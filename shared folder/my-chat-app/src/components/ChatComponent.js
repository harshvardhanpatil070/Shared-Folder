// src/components/ChatComponent.js
import React, { useState, useEffect } from 'react';
import { connectSocket, disconnectSocket, subscribeToChat, sendMessage } from '../services/socketService';


function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Connect to WebSocket when component mounts
    connectSocket();

    // Subscribe to chat messages
    subscribeToChat((newMessage) => {
      setMessages(messages => [...messages, newMessage]);
    });

    // Disconnect on cleanup
    return () => disconnectSocket();
  }, []);

  const handleSendMessage = () => {
    sendMessage(input);
    setInput(''); // Clear input after sending
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatComponent;
