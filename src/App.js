import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "features/Home";
import GlobalFonts from "fonts/fonts";

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
