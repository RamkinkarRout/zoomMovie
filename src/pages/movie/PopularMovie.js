import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const PopularMovie = () => {
  const [page, setPage] = useState(1);
  const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  return (
    <FetchMovie
      url={POPULAR_URL}
      page={page}
      setPage={setPage}
      headerTitle="Trending now in movies"
    />
  );
};

export default PopularMovie;
