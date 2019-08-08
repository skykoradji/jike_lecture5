import React from 'react';
import { withRouter } from 'react-router-dom';
import connectRedux from '../redux/connect';

function AuthButton({ history, auth, deauthenticate }) {


  const { isAuthenticated, username } = auth;

  const logout = () => {
    deauthenticate();
    history.push('/login');
  };

  if (isAuthenticated) {
    return (
      <p>
        Welcome, {username} 
        <button onClick={logout}>Sign out</button>
      </p>
    )
  } else {
    return <p>You are not logged in.</p>
  }
}

export default withRouter(connectRedux(AuthButton));