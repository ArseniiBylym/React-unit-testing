import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Layout} from './components';
import {MainRouter} from './routes';
import './index.scss';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Layout>
      <MainRouter />
    </Layout>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
