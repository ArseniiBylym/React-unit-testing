import React, {useState, useEffect} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

const Home = props => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography variant="h1" color="primary" className={styles.typography}>
        Wellcome!
      </Typography>
      <Typography variant="h4" className={styles.typography}>
        Create your own todo list
      </Typography>
    </div>
  );
};

export default Home;
