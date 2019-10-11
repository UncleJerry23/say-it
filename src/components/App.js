import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SplashPage from '../containers/Splash';

export default function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={SplashPage} />
      </Switch>
    </Router>
  );
}
