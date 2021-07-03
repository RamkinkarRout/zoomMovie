import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import GenreMovie from "./components/GenreMovie";
import DiscoverMovie from "./pages/movie/DiscoverMovie";
import ScifiMovie from "./pages/movie/ScifiMovie";
import TrendingMovie from "./pages/movie/TrendingMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <GenreMovie />

        <Switch>
          <Route
            path="/"
            component={ScifiMovie}
            exact
          ></Route>
          <Route
            path="/DiscoverMovie"
            component={DiscoverMovie}
          ></Route>
          <Route
            path="/TrendingMovie"
            component={TrendingMovie}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
