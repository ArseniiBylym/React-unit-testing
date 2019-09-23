import React, {useState, useEffect} from 'react';
import TodosContext from '../context/todosContext';
import {FILTER_TYPES} from '../config/constants';

const TodosProvider = ({children}) => {
  
  const setTodos = list => {
    setState(prevState => ({
      ...prevState,
      todos: list,
    }));
  };
  const addTodo = item => {
    setState(prevState => ({
      ...prevState,
      todos: [...prevState.todos, item],
    }));
  };
  const updateTodo = item => {
    setState(prevState => ({
      ...prevState,
      todos: prevState.todos.map(elem => (elem._id === item._id ? item : elem)),
    }));
  };
  const deleteTodo = id => {
    setState(prevState => ({
      ...prevState,
      todos: prevState.todos.filter(elem => elem._id !== id),
    }));
  };
  const setError = err => {
    setState(prevState => ({
      ...prevState,
      error: err,
    }));
  };
  const setIsLoading = status => {
    setState(prevState => ({
      ...prevState,
      isLoading: status,
    }));
  };
  const setFilterType = e => {
    setState(prevState => ({
      ...prevState,
      filterType: e.target.value,
    }));
  }

  const todosState = {
    todos: null,
    error: null,
    isLoading: true,
    filterType: FILTER_TYPES.ALL,
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    setError,
    setIsLoading,
    setFilterType,
  };

  const [state, setState] = useState(todosState);

  return <TodosContext.Provider value={state}>{children}</TodosContext.Provider>;
};

export default TodosProvider;
