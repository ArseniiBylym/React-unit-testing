import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import todosReducer from './reducers/todos';
import errorReducer from './reducers/error';
import loadingReducer from './reducers/loading';
import filterReducer from './reducers/filter';

const rootReducer = combineReducers({
  todosReducer,
  errorReducer,
  loadingReducer,
  filterReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
