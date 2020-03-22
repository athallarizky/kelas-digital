import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/Landing-Pages/Home";
import About from "./components/Landing-Pages/About";
import Offers from "./components/Landing-Pages/Offers";
import TopCourses from "./components/Landing-Pages/Top-Courses";
import FAQ from "./components/Landing-Pages/FAQ";
import Testimonials from "./components/Landing-Pages/Testimonials";

import "./App.css";

const App = () => {


  return(
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/offers" component={Offers}/>
        <Route path="/top-courses" component={TopCourses}/>
        <Route path="/faq" component={FAQ} />
        <Route path="/testimonials" component={Testimonials} />
      </Switch>
    </Router>
  )
}

export default App;