import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const DiscoverMovie = () => {
  const [page, setPage] = useState(1);
  const DISCOVER_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;
  return (
    <FetchMovie
      url={DISCOVER_URL}
      page={page}
      setPage={setPage}
      headerTitle="Discover something new"
    />
  );
};

export default DiscoverMovie;
