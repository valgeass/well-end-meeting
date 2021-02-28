import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link, withRouter } from 'react-router-dom';
import { List } from '@material-ui/core';

import { buttons_info } from '../util/PageList';
import SignOut from './SignOut';

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

const SideList = (history) => {
  console.log(history);
  const classes = useStyles();

  const handleSubmit = () => {
    SignOut(history);
  };

  return (
    <List className={classes.list}>
      {buttons_info.map((text, index) => (
        <ListItem button key={text.label}>
          <Link
            to={text.link_to}
            onClick={() => {
              if (text.link_to === '/signout') {
                handleSubmit();
              } else {
                return false;
              }
            }}
          >
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.label} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default withRouter(SideList);
