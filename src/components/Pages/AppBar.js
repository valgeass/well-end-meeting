import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { SimpleMenu } from './SimpleMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    gridRow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SimpleMenu className={classes.menuButton}>
            <MenuIcon />
          </SimpleMenu>
          <Typography variant="h6" className={classes.title}>
            Main
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
