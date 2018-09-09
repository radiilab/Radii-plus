import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';




import Navigation from '../Navigation';
import LandingPage from '../Landing';
import HomePage from '../Home';

import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';


import './index.css';

const App = () =>
  <Router>
    
    <div >

      <Navigation />
   
        <div   >
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
          <Route exact path={routes.HOME} component={() => <HomePage />} />
          
       </div>
    </div>
  </Router>

export default withAuthentication(App);