import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Bodydiagram from './components/bodydiagram/Bodydiagram';
import Info from './components/info/Info';

const Routes = (props) => {
   <Router {...props}>
    <Route path="/" component={App}>
     <Route path="/bodydiagram" component={Bodydiagram} />
     <Route path="/info" component={Info} />
    </Route>
   </Router>
};
