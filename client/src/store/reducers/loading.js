import {SET_LOADING} from '../actions/actionTypes';

const initialState = {
  isLoading: true,
};

const loadingReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload
      }
  }
  return state;
};

export default loadingReducer;
