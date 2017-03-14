import React from 'react';
import {Router, Route} from 'react-router';
import App from './App';
import { browserHistory } from 'react-router';
import Bodydiagram from './components/bodydiagram/Bodydiagram';


const Routes = (props) =>{
  <Router history={browserHistory} {...props}>
    <Route path="/" component={App}>
        <Route path="/body" component={Bodydiagram} />
    </Route>
  </Router>
};

export default Routes;
