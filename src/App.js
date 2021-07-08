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
import TopRatedMovie from "./pages/movie/TopRatedMovie";
import PopularMovie from "./pages/movie/PopularMovie";
import ActionMovie from "./pages/movie/ActionMovie";
import MysteryMovie from "./pages/movie/MysteryMovie";
import WesternMovie from "./pages/movie/WesternMovie";
import HorrorMovie from "./pages/movie/HorrorMovie";
import AnimationMovie from "./pages/movie/ActionMovie";
import ComedyMovie from "./pages/movie/ComedyMovie";
import WarMovie from "./pages/movie/WarMovie";
import ThrillerMovie from "./pages/movie/ThrillerMovie";
import CrimeMovie from "./pages/movie/CrimeMovie";
import DramaMovie from "./pages/movie/DramaMovie";
import FamilyMovie from "./pages/movie/FamilyMovie";
import RomanceMovie from "./pages/movie/RomanceMovie";
import HistoryMovie from "./pages/movie/HistoryMovie";
import ActionSeries from "./pages/tvSeries/ActionSeries";
import WatchDetails from "./components/WatchDetails";
import WatchDetailsTV from "./pages/tvSeries/WatchDetailsTV";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <GenreMovie />

        <Switch>
          <Route
            path="/ScifiMovie"
            component={ScifiMovie}
            exact
          ></Route>
          <Route
            path="/DiscoverMovie"
            component={DiscoverMovie}
            exact
          ></Route>
          <Route path="/" component={TrendingMovie} exact />
          <Route
            path="/TopRatedMovie"
            component={TopRatedMovie}
            exact
          />
          <Route
            path="/PopularMovie"
            component={PopularMovie}
            exact
          />
          <Route
            path="/ActionMovie"
            component={ActionMovie}
            exact
          />
          <Route
            path="/MysteryMovie"
            component={MysteryMovie}
            exact
          />
          <Route
            path="/WesternMovie"
            component={WesternMovie}
            exact
          />
          <Route
            path="/HorrorMovie"
            component={HorrorMovie}
            exact
          />
          <Route
            path="/AnimationMovie"
            component={AnimationMovie}
            exact
          />
          <Route
            path="/ComedyMovie"
            component={ComedyMovie}
            exact
          />
          <Route
            path="/WarMovie"
            component={WarMovie}
            exact
          />
          <Route
            path="/ThrillerMovie"
            component={ThrillerMovie}
            exact
          />
          <Route
            path="/CrimeMovie"
            component={CrimeMovie}
            exact
          />
          <Route
            path="/DramaMovie"
            component={DramaMovie}
            exact
          />
          <Route
            path="/FamilyMovie"
            component={FamilyMovie}
            exact
          />
          <Route
            path="/HistoryMovie"
            component={HistoryMovie}
            exact
          />
          <Route
            path="/RomanceMovie"
            component={RomanceMovie}
            exact
          />
          <Route
            path="/TvShows"
            component={ActionSeries}
            exact
          />
          <Route
            path="/TvShows/WatchDetailsTv/:handel"
            component={WatchDetailsTV}
            exact
          />
          <Route
            path="/WatchDetails/:handel"
            component={WatchDetails}
            exact
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
