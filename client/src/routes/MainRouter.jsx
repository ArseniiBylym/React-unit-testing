import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {PageNotFound, Home, TodoList} from '.';
import {MainHeader} from '../components';
import {TodosProvider} from '../providers';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <TodosProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todos" component={TodoList} />
          <Route path="/page-not-found" component={PageNotFound} />
          <Redirect from="/*" to="/page-not-found" />
        </Switch>
      </TodosProvider>
    </BrowserRouter>
  );
};

export default MainRouter;
