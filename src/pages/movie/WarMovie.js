import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const WarMovie = () => {
  const [page, setPage] = useState(1);
  const War_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752&page=${page}`;
  return (
    <FetchMovie
      url={War_URL}
      page={page}
      setPage={setPage}
      headerTitle="War genre movies"
    />
  );
};

export default WarMovie;
