import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const RomanceMovie = () => {
  const [page, setPage] = useState(1);
  const Romance_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749&page=${page}`;
  return (
    <FetchMovie
      url={Romance_URL}
      page={page}
      setPage={setPage}
      headerTitle="Romance blockbuster movies"
    />
  );
};

export default RomanceMovie;
