import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import MessageInputField from '../Message/MessageInputField';
import MessageList from '../Message/MessageList';

import { AuthContext } from '../auth/AuthProvider';

import { AppBar } from './AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  },
  liner: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Main = () => {
  const { currentUser, profileData } = useContext(AuthContext);
  const classes = useStyles();
  const [name, setName] = useState('test');

  // useEffect(() => {
  //   let unmount = false;
  //   const fetchData = async () => {
  //     try {
  //       const response = await DB({ currentUser, setName });
  //       console.log('response', response);
  //       let data = { title: 'not found' };
  //       if (response.exists) {
  //         data = response.data();
  //         setName(data);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   if (!unmount) {
  //     fetchData();
  //   }
  //   return () => (unmount = true);
  // }, []);

  if (profileData.firstName) {
    return (
      <div className={classes.root}>
        <AppBar page="main" name={profileData.firstName} />
        <MessageList />
        <MessageInputField name={profileData.firstName} />
      </div>
    );
  } else {
    return (
      <div className={classes.liner}>
        <LinearProgress />
      </div>
    );
  }
};

export default Main;
