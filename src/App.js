import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clicky from "./pages/Clicky";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Clicky} />
          <Route exact path="/Header" component={Clicky} />
          {/* <Route exact path="/Header/:id" component={Detail} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;