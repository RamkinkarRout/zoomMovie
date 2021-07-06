import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const HorrorMovie = () => {
  const [page, setPage] = useState(1);
  const Horror_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&page=${page}`;
  return (
    <FetchMovie
      url={Horror_URL}
      page={page}
      setPage={setPage}
      headerTitle="top picks horror movies for you"
    />
  );
};

export default HorrorMovie;
