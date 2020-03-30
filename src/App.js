import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Layout from "./components/Landing-Pages/Layout";

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Layout} /> 
      </Switch>
    </Router>
  )
}

export default App;