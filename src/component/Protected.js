import React from 'react';
import { Redirect } from 'react-router-dom';
import connectRedux from '../redux/connect';


function Protected({ isProtected, auth }) {

  const { isAuthenticated } = auth;

  if(!isProtected || !isAuthenticated) {
    return <Redirect to={{ pathname: "/login" }} />

  } else {
    return <h3>I'm Protected</h3>;
  }
}

export default connectRedux(Protected);