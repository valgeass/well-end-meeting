import React, { useState } from 'react';

import Main from './Main';
import config from '../config.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//screen
import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthProvider } from './AuthProvider';
import Auth from './Auth';

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
            </Switch>
          </Auth>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
