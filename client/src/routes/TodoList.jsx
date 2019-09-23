import React, {useEffect, useContext} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {MdAdd} from 'react-icons/md';

import {Spinner, TodoItem, TodoModal, TodoSelect} from '../components';
import {URL_PATH, fetchApi} from '../api';
import TodosContext from '../context/todosContext';

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
  const styles = useStyles();
  const {todos, setTodos, addTodo, isLoading, setIsLoading, error, setError, filterType} = useContext(TodosContext);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetchApi.get(URL_PATH.TODOS);
      setIsLoading(false);
      setTodos(res.data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  const renderTodos = () => {
    return todos
      .filter(item => (filterType === 1 ? item.done : filterType === 2 ? !item.done : item))
      .map(item => {
        const {_id, title, text, done} = item;
        return <TodoItem key={_id} item={{_id, title, text, done}} />;
      });
  };

  const handleAdd = async item => {
    const res = await fetchApi.post(URL_PATH.TODOS, item);
    addTodo(res.data);
  };

  return (
    <div className={styles.root}>
      {error && (
        <Typography variant="h5" color="textSecondary">
          {error.message}
        </Typography>
      )}
      {isLoading && <Spinner bgColor="#efefefa4" />}
      {todos && todos.length && <TodoSelect />}
      {todos && todos.length && <div className={styles.todosWrapper}>{renderTodos()}</div>}
      <div className={styles.buttonWrapper}>
        <TodoModal button={<MdAdd />} title="Create new todo" iconColor="primary" handleSubmit={handleAdd} />
      </div>
    </div>
  );
};

export default TodoList;
