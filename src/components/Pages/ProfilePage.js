import React, { useState, createRef, useContext } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from './AppBar';
import { gravatarPath } from '../../gravatar';
import { AuthContext } from '../auth/AuthProvider';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    gridRow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    flexGrow: 1,
  },
}));

const ProfilePage = () => {
  const { profileData } = useContext(AuthContext);
  const classes = useStyles();
  const ref = createRef();
  const avatarPath = gravatarPath(profileData.firstName);

  return (
    <div>
      <AppBar page="profile" />
      <Avatar src={avatarPath} />
    </div>
  );
};

export default ProfilePage;
