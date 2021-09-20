import React from 'react';
import {Home} from './pages/home'
import { Characters } from './pages/characters';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './Styles/app.css'


function App() {

  return (
  <BrowserRouter>  
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/characters" exact component={Characters}></Route>
    </Switch>
  </BrowserRouter>

  
  )
}
export default App;

