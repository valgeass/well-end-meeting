import React from 'react';

import Main from './Pages/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//screen
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { AuthProvider } from './auth/AuthProvider';
import ProfilePage from './Pages/ProfilePage';
import PrivateRouter from './util/PrivateRouter'

export default () => {

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <PrivateRouter exact path="/profile" component={ProfilePage} />
          <PrivateRouter exact path="/" component={Main} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};
