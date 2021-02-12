import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
import config from '../config.json';
import SignUp from './SignUp';

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
  if (signup) {
    return <SignUp />
  } else if (config.signInEnabled === true && name === '') {
    return <SignIn setName={setName} setSignUp={setSignUp} />;;
  } else {
    return <Main name={name} />;
  }
};
