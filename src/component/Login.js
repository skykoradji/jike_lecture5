import React from 'react';
import { Redirect } from 'react-router-dom';
import connectRedux from '../redux/connect';


function Login({ auth, authenticate }) {

 
  const login = () => {
    authenticate(true, 'alex');
  }

  if (auth.isAuthenticated) return <Redirect to="/protected" />
  return (
    <div>
        <p>You must log in to view the page</p>
        <button onClick={login}>Log in</button>
      </div>
  )
}

export default connectRedux(Login);