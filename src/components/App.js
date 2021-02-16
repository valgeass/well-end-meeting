import React, { useState } from 'react';

import Main from './Pages/Main';
import config from '../config.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//screen
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { AuthProvider } from './auth/AuthProvider';
import Auth from './auth/Auth';
import ProfilePage from './Pages/ProfilePage';

export default () => {
  const [name, setName] = useState('');
  const [signup, setSignUp] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={SignIn} />
          <Auth>
            <Switch>
              <Route exact path="/main" component={Main} />
              <Route exact path="/profile" component={ProfilePage} />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
