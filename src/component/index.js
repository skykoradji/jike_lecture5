import React from "react";
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";



import Login from './Login';
import Public from './Public';
import Protected from './Protected';
import AuthSection from './AuthSection';

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time


const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} isProtected={true} />} />
);

function AuthExample() {
  return (
    <BrowserRouter>
      <div>
        <AuthSection />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/protected" component={Protected} />
      </div>
    </BrowserRouter>
  );
}

export default AuthExample;
