import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';

import { gravatarPath } from '../../gravatar';
import MessageField from './MessageField';
import MessageSubmitButton from './MessageSubmitButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    gridRow: 3,
    margin: '26px',
  },
});

const MessageInputField = ({ name }) => {
  const inputEl = useRef(null);
  const [text, setText] = useState('');
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Link to='/profile'>
            <Avatar src={avatarPath} />
          </Link>
        </Grid>
        <Grid item xs={10}>
          <MessageField
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputEl={inputEl}
            name={name}
            setText={setText}
            text={text}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
