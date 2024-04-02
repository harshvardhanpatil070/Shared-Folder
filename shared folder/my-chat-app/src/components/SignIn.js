// src/components/SignIn.js
import React, { useState } from 'react';
import { auth } from '../firebase-config';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
  };

  return (
    <div>
      <form onSubmit={signIn}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
