import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'features/Home';
import GlobalFonts from 'fonts/fonts';

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
