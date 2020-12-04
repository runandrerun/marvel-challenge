import React from 'react';
import {Home} from './pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />
    </Router>
  );
}

export default App;
