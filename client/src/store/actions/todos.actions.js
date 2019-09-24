import {SET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO} from './actionTypes';
import {fetchApi, URL_PATH} from '../../api';
import {setError} from './error.actions';
import { setLoading } from './loading.actions';

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

export const setTodos = () => async dispatch => {
  try {
    const res = await fetchApi.get(URL_PATH.TODOS);
    dispatch(set(res.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false))
  }
};

export const addTodo = item => async dispatch => {
  try {
    const res = await fetchApi.post(URL_PATH.TODOS, item);
    dispatch(add(res.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const updateTodo = item => async (dispatch) => {
  console.log(item)
  try {
    const res = await fetchApi.put(`${URL_PATH.TODOS}/${item._id}`, item);
    dispatch(update(res.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const removeTodo = id => async dispatch => {
  try {
    const res = await fetchApi.delete(`${URL_PATH.TODOS}/${id}`);
    dispatch(remove(res.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
