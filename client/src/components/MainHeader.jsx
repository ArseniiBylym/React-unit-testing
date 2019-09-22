import React from 'react';
import {NavLink} from 'react-router-dom';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {MdEventNote} from 'react-icons/md';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    title: {
      marginRight: theme.spacing(4),
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
      margin: '0 1rem',
      '&.active': {
        textDecoration: 'underline',
      },
      '&:hover': {
        color: theme.palette.grey['500'],
      },
    },
  }),
);

const MainHeader = props => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={styles.icon} color="inherit" aria-label="menu">
            <MdEventNote />
          </IconButton>
          <Typography variant="h4" className={styles.title}>
            Todo app
          </Typography>
          <NavLink exact to="/" className={styles.link}>
            <Typography variant="h6">Home</Typography>
          </NavLink>
          <NavLink exact to="/todos" className={styles.link}>
            <Typography variant="h6">Todos</Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainHeader;
