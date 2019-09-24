import {takeEvery, call, put} from 'redux-saga/effects';
import {SET_TODOS_SAGA, UPDATE_TODO_SAGA, ADD_TODO_SAGA, DELETE_TODO_SAGA} from '../actions/actionTypes';
import {URL_PATH, fetchApi} from '../../api';
import {set, add, update, remove} from '../actions/todos.actions';
import {setError} from '../actions/error.actions';
import {setLoading} from '../actions/loading.actions';

function* setTodos() {
  try {
    const res = yield call(fetchApi.get, URL_PATH.TODOS);
    yield put(set(res.data));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

function* addTodo ({payload}) {
  try {
    const res = yield call(fetchApi.post, URL_PATH.TODOS, payload);
    yield put(add(res.data));
  } catch (error) {
    yield put(setError(error.message));
  }
};

function* updateTodo ({payload}) {
  try {
    const res = yield call(fetchApi.put, `${URL_PATH.TODOS}/${payload._id}`, payload);
    yield put(update(res.data));
  } catch (error) {
    yield put(setError(error.message));
  }
};

function* removeTodo ({payload}) {
  try {
    const res = yield call(fetchApi.delete, `${URL_PATH.TODOS}/${payload}`);
    yield put(remove(res.data));
  } catch (error) {
    yield put(setError(error.message));
  }
};

export const todosSagas = [
  takeEvery(SET_TODOS_SAGA, setTodos),
  takeEvery(ADD_TODO_SAGA, addTodo),
  takeEvery(UPDATE_TODO_SAGA, updateTodo),
  takeEvery(DELETE_TODO_SAGA, removeTodo),
];
