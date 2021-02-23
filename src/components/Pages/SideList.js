import React, { forwardRef, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';
import { List } from '@material-ui/core';

import { buttons_info } from '../util/PageList';
import { AuthContext } from '../auth/AuthProvider';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}));

const SideList = forwardRef((props, ref) => {
  const classes = useStyles();

  const { signOut } = useContext(AuthContext);
  const handleSubmit = () => {
    // e.preventDefault();
    signOut();
  };

  return (
    <List className={classes.list} ref={ref}>
      {buttons_info.map((text, index) => (
        <ListItem button key={text.label}>
          <Link
            to={text.link_to}
            onClick={() => {
              handleSubmit();
            }}
          >
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.label} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
});

export default SideList;
