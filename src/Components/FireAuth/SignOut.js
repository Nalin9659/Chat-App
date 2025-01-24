import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './config';

const SignOut = ({ onSignOut }) => {
  const handleSignOut = async () => {
    await signOut(auth);
    onSignOut();
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
