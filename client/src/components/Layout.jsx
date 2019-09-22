import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
