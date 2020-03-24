import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Layout from "./components/Landing-Pages/Layout";
import PageNotFound from "./components/Shared/Page-Not-Found";
import "./App.css";

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/login" exact component={PageNotFound} />
        <Route path="/" component={Layout} /> 
      </Switch>
    </Router>
  )
}

export default App;