import React, { useState, useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from './AppBar';
import ProfielDetail from './ProfileDetail';
import ProfielDetailEdit from './ProfileDetailEdit';
import { SetDB } from '../util/DB';
import { AuthContext } from '../auth/AuthProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    gridRow: 1,
  },
  liner: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ProfilePage = () => {
  const { currentUser, profileData } = useContext(AuthContext);

  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState(profileData.firstName);
  const [lastName, setLastName] = useState(profileData.lastName);

  const data = {
    firstName: firstName,
    lastName: lastName,
  };
  const handleClick = async () => {
    await SetDB({ currentUser }, data);
    setEdit(false);
  };

  useEffect(() => {
    console.log(firstName);
    console.log(profileData.firstName);
  }, [edit]);

  if (!profileData) {
    return (
      <div className={classes.liner}>
        <LinearProgress />
      </div>
    );
  } else if (!edit) {
    return (
      <div>
        <AppBar page="profile" />
        <ProfielDetail />
        <Button
          onClick={() => {
            setFirstName(profileData.firstName);
            setLastName(profileData.lastName);
            setEdit(true);
          }}
        >
          edit
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <AppBar page="profile" />
        <ProfielDetailEdit
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
        <Button
          onClick={() => {
            setEdit(false);
          }}
        >
          cancel
        </Button>
        <Button onClick={() => handleClick()}>ok</Button>
      </div>
    );
  }
};

export default ProfilePage;
