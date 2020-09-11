import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalFonts from "./fonts/fonts";
import Home from "./components/Home";
import Dish from "./components/Dish";
import Art from "./components/Art";

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/art" component={Art} />
          <Route exact path="/dish" component={Dish} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
