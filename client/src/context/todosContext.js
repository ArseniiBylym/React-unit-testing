import {createContext} from 'react';

export default createContext({
  todos: null,
  error: null,
  isLoading: false,
  filterType: null,
  setTodos: () => {},
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  setError: () => {},
  setIsLoading: () => {},
  setFilterType: () => {},
})