import React, { useState, createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar as BaseAppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import SideList from './SideList';

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

export const AppBar = ({ page }) => {
  const classes = useStyles();
  const ref = createRef();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={classes.root}>
      <BaseAppBar position="static">
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
            <SideList />
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            {page}
          </Typography>
        </Toolbar>
      </BaseAppBar>
    </div>
  );
};
