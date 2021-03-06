import React, { useState } from "react";
import FetchMovie from "./FetchMovie";
import { API_KEY } from "../../config";

const TrendingMovie = () => {
  const [page, setPage] = useState(1);
  const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  return (
    <FetchMovie
      url={TRENDING_URL}
      page={page}
      setPage={setPage}
      headerTitle="Trending now in movies"
    />
  );
};

export default TrendingMovie;
