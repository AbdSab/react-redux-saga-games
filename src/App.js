import React from 'react';
import {
  Switch, BrowserRouter,
} from "react-router-dom";
import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Routes/>
    </Switch>
  </BrowserRouter>
)

export default App;
