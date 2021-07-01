import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Movie from "./pages/Movie";
import Tvshows from "./pages/Tvshows";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Movie} exact></Route>
          <Route
            path="/tvshows"
            component={Tvshows}
          ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
