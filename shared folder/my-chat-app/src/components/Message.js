// src/components/Message.js
import React from 'react';

function Message({ message }) {
  return (
    <p style={{ background: message.sentByCurrentUser ? 'blue' : 'gray' }}>
      {message.text}
    </p>
  );
}

export default Message;
