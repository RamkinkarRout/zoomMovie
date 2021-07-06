import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const WesternMovie = () => {
  const [page, setPage] = useState(1);
  const Western_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37&page=${page}`;
  return (
    <FetchMovie
      url={Western_URL}
      page={page}
      setPage={setPage}
      headerTitle="western genre movies"
    />
  );
};

export default WesternMovie;
