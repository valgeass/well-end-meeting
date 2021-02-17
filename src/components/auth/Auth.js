import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import SignIn from '../Pages/SignIn';
import Main from '../Pages/Main';

import { auth } from '../../firebase';

const Auth = () => {
  const [signInCheck, setSignInCheck] = useState(false);
  useEffect(
    auth.onAuthStateChanged((user) => {
      if (user) {
        setSignInCheck(true);
      } else {
        setSignInCheck(false);
      }
    }),
    []
  );
  return <Fragment>{signInCheck ? <Main /> : <SignIn />}</Fragment>;
};

export default Auth;
