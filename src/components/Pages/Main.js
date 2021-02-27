import React, { useContext, useEffect, useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MessageInputField from '../Message/MessageInputField';
import MessageList from '../Message/MessageList';

import { AuthContext } from '../auth/AuthProvider';
import { withRouter } from 'react-router-dom';
import { from } from 'rxjs';

import { ButtonAppBar } from './AppBar';
import { DB } from '../util/DB';

import { firebaseStore } from '../util/firebase';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  },
});

const Main = () => {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const [name, setName] = useState('');

  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      const col = DB({ currentUser, setName });
      console.log(unmount);
    }
    return () => {
      unmount = true;
      console.log(unmount);
    };
  }, []);

  if (name) {
    return (
      <div className={classes.root}>
        <ButtonAppBar />
        <MessageList />
        <MessageInputField name={name.firstName} />
      </div>
    );
  } else {
    return <div>wait ...</div>;
  }
};

export default Main;
