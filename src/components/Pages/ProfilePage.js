import React, { useState, useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
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
}));

const ProfilePage = () => {
  const { currentUser, profileData } = useContext(AuthContext);
  console.log({ currentUser });
  console.log({ profileData });
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState(profileData.firstName);
  const [lastName, setLastName] = useState(profileData.lastName);
  console.log(profileData);

  console.log({ currentUser });
  const data = {
    firstName: firstName,
    lastName: lastName,
  };
  const handleClick = async () => {
    console.log({ currentUser });
    console.log({ data });
    // await SetDB({ currentUser }, data);
    setEdit(false);
  };

  useEffect(() => {
    console.log(firstName);
  }, [firstName]);

  if (!edit) {
    return (
      <div>
        <AppBar page="profile" />
        <ProfielDetail />
        <Button
          onClick={() => {
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
