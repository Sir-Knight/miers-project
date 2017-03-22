import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Bodydiagram from './components/bodydiagram/Bodydiagram';
import Info from './components/info/Info';

const Routes = (props) => {
    return(
      <div>
   <BrowserRouter {...props}>
    <App>
     <Route path="/bodydiagram" component={Bodydiagram} />
     <Route path="/info" component={Info} />
    </App>
   </BrowserRouter>
   </div>
 );

};

export default Routes;
