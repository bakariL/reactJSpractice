import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

//const Router = (props, context) => (
const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
    </div>
  </Router>
);

export default Routes;

//function Router() {
//  return(
//      ...
//  );
//}