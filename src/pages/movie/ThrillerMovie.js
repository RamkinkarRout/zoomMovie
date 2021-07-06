import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const ThrillerMovie = () => {
  const [page, setPage] = useState(1);
  const Thriller_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53&page=${page}`;
  return (
    <FetchMovie
      url={Thriller_URL}
      page={page}
      setPage={setPage}
      headerTitle="all time fav thriller movies"
    />
  );
};

export default ThrillerMovie;
