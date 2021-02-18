import { Link } from '@material-ui/core';
import React, { useContext } from 'react';

import { AuthContext } from '../auth/AuthProvider';

const ProfilePage = ({ history }) => {
  const { currentUser, signOut } = useContext(AuthContext);
  const handleSubmit = (e) => {
    // e.preventDefault();
    signOut();
    history.push('/signin');
  };
  console.log(currentUser);
  return (
    <Link
      to="/signin"
      onClick={(e) => {
        handleSubmit(e);
      }}
    >
      signOut
    </Link>
  );
};

export default ProfilePage;
