import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
// import LoadingOverlay from 'react-loading-overlay';
import SignIn from '../Pages/SignIn';
import Main from '../Pages/Main';

import { auth } from '../../firebase';

const Auth = () => {
  const [signInCheck, setSignInCheck] = useState(false);
  useEffect(
    auth.onAuthStateChanged((user) => {
      console.log(user);
      // if (user) {
      //   setSignInCheck(true);
      //   console.log(user);
      // } else {
      //   setSignInCheck(false);
      //   console.log(user);
      // }
    }),
    []
  );
  return <Fragment>{true ? <Main /> : <SignIn />}</Fragment>;
};

export default Auth;
