import React, { useContext } from 'react';
import SignIn from '../Pages/SignIn';
import { Route } from 'react-router-dom';

import { AuthContext } from '../auth/AuthProvider';
const PrivateRouter = ({ component: RouteComponent, ...options }) => {
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? RouteComponent : SignIn;
  const Path = currentUser ? options.path : '/signin';
  console.log(options);
  return <Route {...options} component={Component} path={Path} />;
};

export default PrivateRouter;
