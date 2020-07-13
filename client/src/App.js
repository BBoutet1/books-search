import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Search from "./pages/Search/Search"
import Saved  from "./pages/Saved/Saved"

function App() {
  return (
    <div>
      <Nav />
      
        <Router>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Books/>
          </Route>
          <Route exact path={"/search"}>
            <Search/>
          </Route>
            <Route exact path={"/saved"}>
            <Saved/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
