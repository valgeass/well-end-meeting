import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import { Link, withRouter } from 'react-router-dom';
import { List } from '@material-ui/core';

import { buttons_info } from '../util/PageList';

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

const SideList = () => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <List>
        {buttons_info.map((text, index) => (
          <ListItem button key={text}>
            <Link to={text.link_to}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideList();
