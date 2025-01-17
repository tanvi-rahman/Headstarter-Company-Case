import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      // navigate('/account');
      navigate('/calendar');
    } else {
      navigate('/');
    }
  }, [user]);
  return (
    <div className=''>
      <h1 className=''>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} className=''>
        Logout
      </button>
    </div>
  );
};