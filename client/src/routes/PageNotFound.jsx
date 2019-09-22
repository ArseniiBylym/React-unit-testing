import React from 'react';
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

const PageNotFound = props => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography variant="h2">404</Typography>
      <Typography variant="h5">Page not found</Typography>
    </div>
  );
};

export default PageNotFound;
