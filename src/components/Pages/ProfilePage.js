import React, { useState, createRef, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import SideList from './SideList';

import { AuthContext } from '../auth/AuthProvider';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    gridRow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    flexGrow: 1,
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const ref = createRef();

  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => {
              setOpenMenu(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            open={openMenu}
            onClose={() => {
              setOpenMenu(false);
            }}
          >
            <SideList ref={ref} />
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ProfilePage;
