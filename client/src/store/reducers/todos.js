import {
  SET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from '../actions/actionTypes';

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_TODOS:
      return {
        ...state,
        todos: payload
      }
    case ADD_TODO: 
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    case UPDATE_TODO: 
      return {
        ...state,
        todos: state.todos.map(item => item._id === payload._id ? payload : item)
      }
    case DELETE_TODO: 
      return {
        ...state, 
        todos: state.todos.filter(item => item._id !== payload._id)
      }
  }
  return state;
};

export default todosReducer;
