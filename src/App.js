//components
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//routes
import Home from './components/home/home'
import Registration from './components/registration/registration'

//css
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/test/registration' component={Registration} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
