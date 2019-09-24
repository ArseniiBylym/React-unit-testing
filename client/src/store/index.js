import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import todosReducer from './reducers/todos';
import errorReducer from './reducers/error';
import loadingReducer from './reducers/loading';
import filterReducer from './reducers/filter';
import {rootSaga} from './sagas/rootSaga';

const rootReducer = combineReducers({
  todosReducer,
  errorReducer,
  loadingReducer,
  filterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;
