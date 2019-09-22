import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const useStyles = ({color, bgColor}) =>
  makeStyles(theme =>
    createStyles({
      root: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColor || theme.palette.grey['500'],
      },
      circle: {
        color: color || theme.palette.primary,
      },
    }),
  )();

const Spinner = ({color, bgColor}) => {
  const styles = useStyles({color, bgColor});

  return (
    <div className={styles.root}>
      <CircularProgress
        classes={{
          svg: styles.circle,
        }}
      />
    </div>
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Spinner;
