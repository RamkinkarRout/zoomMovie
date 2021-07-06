import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const TopRatedMovie = () => {
  const [page, setPage] = useState(1);
  const TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
  return (
    <FetchMovie
      url={TOP_RATED_URL}
      page={page}
      setPage={setPage}
      headerTitle="Check out top rated movies"
    />
  );
};

export default TopRatedMovie;
