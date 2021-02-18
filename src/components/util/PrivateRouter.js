import React, { useContext } from 'react';
import SignIn from '../Pages/SignIn';
import { Route } from 'react-router-dom';

import { AuthContext } from '../auth/AuthProvider';
const PrivateRouter = ({ component: RouteComponent, ...options }) => {
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? RouteComponent : SignIn;
  return <Route {...options} component={Component} />;
};

export default PrivateRouter;
