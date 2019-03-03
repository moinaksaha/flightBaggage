import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from './index.module.css';

import FlightDetailPage from '../FlightDetailPage';
import MobileOnly from '../MobileOnly';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={`${styles.mainContainer}`}>
          <Route exact path="/" component={FlightDetailPage} prototype={1}/>
          <Route 
            path="/prototype2" 
            component={props => <FlightDetailPage {...props} prototype={2} />}
          />
          <Route path="/mobile" component={MobileOnly} />
        </div>
      </Router>
    );
  }
}

export default App;
