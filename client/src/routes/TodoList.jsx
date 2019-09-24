import React, {useEffect} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {MdAdd} from 'react-icons/md';
import {connect} from 'react-redux';

import {Spinner, TodoItem, TodoModal, TodoSelect} from '../components';
import {setTodos, addTodo} from '../store/actions/todos.actions';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      padding: theme.spacing(2),
      position: 'relative',
    },
    todosWrapper: {
      width: '700px',
      margin: '0 auto',
      padding: theme.spacing(2),
      display: 'flex',
      flexFlow: 'column nowrap',
      padding: theme.spacing(2),
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
    },
    buttonWrapper: {
      position: 'absolute',
      right: theme.spacing(3),
      bottom: theme.spacing(3),
    },
    select: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
);

const TodoList = props => {
  const {todos, setTodos, addTodo, error, isLoading, filterType} = props;
  const styles = useStyles();

  useEffect(() => {
    setTodos()
  }, []);

  const renderTodos = () => {
    return todos
      .map(item => {
        const {_id, title, text, done} = item;
        return <TodoItem key={_id} item={{_id, title, text, done}} />;
      });
  };

  return (
    <div className={styles.root}>
      {error && (
        <Typography variant="h5" color="textSecondary">
          {error.message}
        </Typography>
      )}
      {isLoading && <Spinner bgColor="#efefefa4" />}
      {!error && !isLoading && <TodoSelect />}
      {todos && !!todos.length && <div className={styles.todosWrapper}>{renderTodos()}</div>}
      <div className={styles.buttonWrapper}>
        <TodoModal button={<MdAdd />} title="Create new todo" iconColor="primary" handleSubmit={addTodo} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
    .filter(item => (state.filterReducer.filterType === 1 ? item.done : state.filterReducer.filterType === 2 ? !item.done : item)),
  error: state.errorReducer.error,
  isLoading: state.loadingReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  setTodos: () => dispatch(setTodos()),
  addTodo: (item) => dispatch(addTodo(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
