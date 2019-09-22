import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';
import {MdEdit, MdDelete} from 'react-icons/md';
import {TodoModal} from '.';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      width: '100%',
    },
    paper: {
      padding: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
      fontSize: '1rem',
    },
  }),
);

const TodoItem = props => {
  const {_id, title, text, done, handleChange, handleDelete} = props;
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <Grid container>
          <Grid item xs={2} sm={1}>
            <Checkbox checked={done} onChange={() => handleChange({_id, title, text, done: !done})} color="primary" />
          </Grid>
          <Grid item xs={6} sm={9}>
            <Typography variant="h6" color="primary">
              {title}
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </Grid>
          <Grid item xs={2} sm={1}>
            <TodoModal
              button={<MdEdit />}
              title="Edit todo"
              buttonSize="small"
              todo={{title, text, _id}}
              handleSubmit={handleChange}
            />
          </Grid>
          <Grid item xs={2} sm={1}>
            <Fab
              size="small"
              color="secondary"
              aria-label="delete"
              className={styles.button}
              onClick={() => handleDelete(_id)}
            >
              <MdDelete />
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

TodoItem.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoItem;
