import React, {useState} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {MdAdd} from 'react-icons/md';

import {Spinner, TodoItem, TodoModal, TodoSelect} from '../components';
import {URL_PATH, fetchApi} from '../api';
import {useFetch} from '../utils/customHooks';

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
  const [filter, setFilter] = useState(0);
  const {data, isLoading, error, updateItem, addItem, deleteItem} = useFetch(URL_PATH.TODOS);

  const renderTodos = () =>
    data
      .filter(item => (filter === 1 ? item.done : filter === 2 ? !item.done : item))
      .map(item => <TodoItem key={item._id} {...item} handleChange={handleChange} handleDelete={handleDelete} />);

  const handleChange = async item => {
    const res = await fetchApi.put(`${URL_PATH.TODOS}/${item._id}`, item);
    updateItem(res.data);
  };

  const handleAdd = async item => {
    const res = await fetchApi.post(URL_PATH.TODOS, item);
    addItem(res.data);
  };

  const handleDelete = async id => {
    const res = await fetchApi.delete(`${URL_PATH.TODOS}/${id}`);
    deleteItem(res.data);
  };

  return (
    <div className={styles.root}>
      {error && (
        <Typography variant="h3" color="textSecondary">
          {error}
        </Typography>
      )}
      {isLoading && <Spinner bgColor="#efefefa4" />}
      {data && data.length && <TodoSelect filter={filter} handleChange={e => setFilter(e.target.value)} />}
      {data && data.length && <div className={styles.todosWrapper}>{renderTodos()}</div>}
      <div className={styles.buttonWrapper}>
        <TodoModal button={<MdAdd />} title="Create new todo" iconColor="primary" handleSubmit={handleAdd} />
      </div>
    </div>
  );
};

export default TodoList;
