import React from 'react';
import {Home, About} from './pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.ABOUT} component={About} />

      <Route exact path={ROUTES.GITHOME} component={Home} />
      <Route exact path={ROUTES.GITABOUT} component={About} />
    </Router>
  );
}

export default App;
