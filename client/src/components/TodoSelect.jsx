import React from 'react';
import {connect} from 'react-redux';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import {FILTER_TYPES} from '../config/constants';
import {setFilter} from '../store/actions/filter.actions';

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

const TodoSelect = ({filterType, setFilterType}) => {
  const styles = useStyles();
  
  return (
    <div className={styles.root}>
      <Typography variant="h5">Filter</Typography>
      <FormControl variant="outlined" className={styles.formControl}>
        <Select value={filterType} onChange={setFilterType}>
          <MenuItem value={FILTER_TYPES.ALL}>All</MenuItem>
          <MenuItem value={FILTER_TYPES.COMPLETED}>Completed</MenuItem>
          <MenuItem value={FILTER_TYPES.NOT_COMPLETED}>Not completed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

const mapStateToProps = state => ({
  filterType: state.filterReducer.filterType,
});

const mapDispatchToProps = dispatch => ({
  setFilterType: (e) => dispatch(setFilter(e.target.value))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoSelect);
