import {SET_FILTER} from '../actions/actionTypes';
import { FILTER_TYPES } from '../../config/constants';

const initialState = {
  filterType: FILTER_TYPES.ALL
};

const filterReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_FILTER:
      return {
        ...state,
        filterType: payload
      }
  }
  return state;
};

export default filterReducer;
