import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainProvider from './context/MainProvider';
import Login from './pages/Login';
import Meals from './pages/Meals';
import './style/app.css';

function App() {
  return (
    <MainProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Meals } />
      </Switch>
    </MainProvider>
  );
}

export default App;
