import React, { useState, useContext } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from './AppBar';
import { gravatarPath } from '../../gravatar';
import { AuthContext } from '../auth/AuthProvider';

const useStyles = makeStyles((theme) => ({
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
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  textStyle: {
    textAlign: 'left',
    fontSize: '12px',
  },
  profileTextStyle: {
    textAlign: 'center',
    fontSize: '32px',
  },
}));

const ProfielDetail = () => {
  const { profileData } = useContext(AuthContext);
  const classes = useStyles();
  const avatarPath = gravatarPath(profileData.firstName);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Avatar src={avatarPath} className={classes.large} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid container item xs={6}>
              <Grid item xs={6} className={classes.textStyle}>
                FirstName
              </Grid>
              <Grid item xs={6} className={classes.textStyle}>
                LastName
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid container item xs={6}>
              <Grid item xs={6} className={classes.profileTextStyle}>
                {profileData.firstName}
              </Grid>
              <Grid item xs={6} className={classes.profileTextStyle}>
                {profileData.lastName}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfielDetail;
