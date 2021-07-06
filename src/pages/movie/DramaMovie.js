import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const DramaMovie = () => {
  const [page, setPage] = useState(1);
  const Drama_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18&page=${page}`;
  return (
    <FetchMovie
      url={Drama_URL}
      page={page}
      setPage={setPage}
      headerTitle="Drama genre movies"
    />
  );
};

export default DramaMovie;
