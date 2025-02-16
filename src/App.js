import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import GlobalFonts from "./fonts/fonts";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
