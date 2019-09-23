import React, {useContext} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';
import {MdEdit, MdDelete} from 'react-icons/md';
import {TodoModal} from '.';
import TodosContext from '../context/todosContext';
import {URL_PATH, fetchApi} from '../api';

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

const TodoItem = ({item}) => {
  const {_id, title, text, done} = item;
  const styles = useStyles();
  const {updateTodo, deleteTodo} = useContext(TodosContext);

  const handleChange = async item => {
    const res = await fetchApi.put(`${URL_PATH.TODOS}/${item._id}`, item);
    updateTodo(res.data);
  };

  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <Grid container>
          <Grid item xs={2} sm={1}>
            <Checkbox checked={done} onChange={() => handleChange({...item, done: !item.done})} color="primary" />
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
              onClick={() => deleteTodo(item._id)}
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
  item: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
};

export default TodoItem;
