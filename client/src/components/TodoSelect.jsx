import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = () =>
  makeStyles(theme =>
    createStyles({
      root: {
        display: 'flex',
        alignItems: 'center',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
      },
    }),
  )();

const TodoSelect = ({filter, handleChange}) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography variant="h5">Filter</Typography>
      <FormControl variant="outlined" className={styles.formControl}>
        <Select value={filter} onChange={handleChange}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>Completed</MenuItem>
          <MenuItem value={2}>Not completed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default TodoSelect;
