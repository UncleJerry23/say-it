import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SplashPage from '../containers/Splash';
import Thoughts from '../containers/Thoughts';

export default function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route  path="/thoughts" component={Thoughts} />
      </Switch>
    </Router>
  );
}
