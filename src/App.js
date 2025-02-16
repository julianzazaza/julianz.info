import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#ffe" }}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
