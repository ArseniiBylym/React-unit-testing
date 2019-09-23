import {SET_ERROR} from '../actions/actionTypes';

const initialState = {
  error: null,
};

const errorReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_ERROR:
      return {
        ...state,
        error: payload
      }
  }
  return state;
};

export default errorReducer;
