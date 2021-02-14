import React, { useState } from 'react';

import Main from './Main';
import config from '../config.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//screen
import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthProvider } from './AuthProvider';

export default () => {
  const [name, setName] = useState('');
  const [signup, setSignUp] = useState(false);

  // if (config.signInEnabled === true && name === '') {
  //   return <SignIn setName={setName} setSignUp={setSignUp} />;
  // } else if (signup) {
  //   return <SignUp />;
  // } else {
  //   return <Main name={name} />;
  // }
  // return (
  //   <SignIn />
  // )
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={SignIn} />
          {/* <Route exact path="/main" component={Main} /> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
};
