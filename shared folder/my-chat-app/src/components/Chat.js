// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase-config';
import Message from './Message';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const unsubscribe = firestore.collection('messages').orderBy('timestamp')
      .onSnapshot(snapshot => {
        const messagesFromFirestore = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        setMessages(messagesFromFirestore);
      });

    return unsubscribe;
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await firestore.collection('messages').add({
      text: newMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setNewMessage('');
  };

  return (
    <div>
      {messages.map(msg => <Message key={msg.id} message={msg} />)}

      <form onSubmit={sendMessage}>
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
