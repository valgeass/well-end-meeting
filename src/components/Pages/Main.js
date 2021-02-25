import React, { useContext, useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MessageInputField from '../Message/MessageInputField';
import MessageList from '../Message/MessageList';

import { AuthContext } from '../auth/AuthProvider';
import { withRouter } from 'react-router-dom';

import { ButtonAppBar } from './AppBar';
import { DB } from '../util/DB';

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
      (async () => {
        await DB({ currentUser, setName });
      })();
    }
    return () => (unmount = true);
  }, [currentUser]);

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
