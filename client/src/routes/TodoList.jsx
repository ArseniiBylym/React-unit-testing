import React, {useState, useEffect} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      padding: theme.spacing(2),
      justifyContent: 'center',
    },
  }),
);

const TodoList = props => {
  const styles = useStyles();
  return <div className={styles.root}>TodoList</div>;
};

export default TodoList;
