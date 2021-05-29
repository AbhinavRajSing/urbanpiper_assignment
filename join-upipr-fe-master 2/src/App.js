import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Person from "./pages/Person";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";

import './App.css';

function App() {
  return (
    <div className="app stars">
     <div className="twinkling">
      <div className="clouds">
      <Router>
        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/person/:name" exact>
            <Person />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>
    </div>
    </div>
  );
}

export default App;
