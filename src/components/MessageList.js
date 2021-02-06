import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
})

const MessageList = () => {
  const [messages, setMessages] = useState()
  const classes = useStyles()

  useEffect(() => {
    messagesRef.orderByKey()
    .limitToLast(10)
    .on('value', (snapshot) => {
    const messages = snapshot.val();
    if(messages === null) return;
    const entries = Object.entries(messages);
    const newMessages = entries.map((entry) => {
      const [key, nameAndText] = entry;
      return { key, ...nameAndText }
    });
    setMessages(newMessages);
    });
  }, [])
  
  return <div classes={classes.root}>MessageList</div>;
}

export default MessageList;
