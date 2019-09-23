import React from 'react';
import ReactDOM from 'react-dom';

import {Layout} from './components';
import {MainRouter} from './routes';
import './index.scss';
import TodosContext from './context/todosContext';

const App = () => (
  <Layout>
    <TodosContext.Provider>
      <MainRouter />
    </TodosContext.Provider>
  </Layout>
);

ReactDOM.render(<App />, document.getElementById('root'));
