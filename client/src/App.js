import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      
        <Router>
      <div>
        <Switch>
          <Route exact path={["/*"]}>
            <Books/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
