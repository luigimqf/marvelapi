import React, { useEffect, useState } from 'react';
import {Home} from './pages/home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './Styles/app.css'


function App() {

  return (
  <BrowserRouter>  
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/characters/" exact />
    </Switch>
  </BrowserRouter>

  
  )
}
export default App;

