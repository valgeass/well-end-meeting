import React, { useState, useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from './AppBar';
import ProfielDetail from './ProfileDetail';
import ProfielDetailEdit from './ProfileDetailEdit';
import { SetDB, GetDB } from '../util/DB';
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const data = {
    firstName: firstName,
    lastName: lastName,
  };
  const handleClick = async () => {
    await SetDB({ currentUser }, data);
    setEdit(false);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await GetDB({ currentUser });
      let data = { title: 'not found' };
      if (response.exists) {
        data = response.data();
        console.log(data);
        setLastName(data.lastName);
        setFirstName(data.firstName);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <ProfielDetail firstName={firstName} lastName={lastName} />
        <Button
          onClick={() => {
            fetchData();
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
          firstName={firstName}
          lastName={lastName}
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
