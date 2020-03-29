import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routelist';

const App = () => (
  <>
    {routes.map(({
      path,
      exact,
      Component,
    }) => <Route key={path} path={path} exact={exact} component={Component} />)}
  </>
);

export default App;
