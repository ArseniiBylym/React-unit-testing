import React from 'react';
import ReactDOM from 'react-dom';

import {Layout} from './components';
import {MainRouter} from './routes';
import './index.scss';

const App = () => (
  <Layout>
    <MainRouter />
  </Layout>
);

ReactDOM.render(<App />, document.getElementById('root'));
