import React, {useState, useEffect} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      maxWidth: '1200px',
      margin: 'auto',
      minHeight: '100vh',
      display: 'flex',
      flexFlow: 'column nowrap',
      backgroundColor: 'pink',
    },
  }),
);

const Layout = props => {
  const styles = useStyles();

  return <div className={styles.root}>{props.children}</div>;
};

export default Layout;
