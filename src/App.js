import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import GlobalFonts from "./fonts/fonts";
import Home from "./components/Home";
import Dish from "./components/Dish";
import Art from "./components/Art";

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/art" component={Art} />
          <Route exact path="/dish" component={Dish} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
