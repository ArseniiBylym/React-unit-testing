import {
  SET_TODOS_SAGA,
  UPDATE_TODO_SAGA,
  ADD_TODO_SAGA,
  DELETE_TODO_SAGA,
  SET_TODOS,
  UPDATE_TODO,
  ADD_TODO,
  DELETE_TODO,
} from './actionTypes';

export const set = todos => ({
  type: SET_TODOS,
  payload: todos,
});

export const add = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const update = todo => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const remove = id => ({
  type: DELETE_TODO,
  payload: id,
});

export const setTodos = () => ({type: SET_TODOS_SAGA});
export const addTodo = item => ({type: ADD_TODO_SAGA, payload: item});
export const updateTodo = item => ({type: UPDATE_TODO_SAGA, payload: item});
export const removeTodo = id => ({type: DELETE_TODO_SAGA, payload: id});
