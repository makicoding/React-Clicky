import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckingAccount from "./pages/CheckingAccount";
import SavingsAccount from "./pages/SavingsAccount";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={CheckingAccount} />
          <Route exact path="/savings" component={SavingsAccount} />
          {/* <Route exact path="/savings/:id" component={Detail} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;