import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const CrimeMovie = () => {
  const [page, setPage] = useState(1);
  const Crime_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80&page=${page}`;
  return (
    <FetchMovie
      url={Crime_URL}
      page={page}
      setPage={setPage}
      headerTitle="Crime genre movies"
    />
  );
};

export default CrimeMovie;
