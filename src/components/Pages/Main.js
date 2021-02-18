import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MessageInputField from '../Message/MessageInputField';
import MessageList from '../Message/MessageList';

import { AuthContext } from '../auth/AuthProvider';
import { withRouter } from 'react-router-dom';

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
  console.log('main');
  if (currentUser) {
    return (
      <div className={classes.root}>
        <MessageList />
        <MessageInputField name={currentUser?.uid} />
      </div>
    );
  } else {
    return <div>wait ...</div>;
  }
};

export default withRouter(Main);
