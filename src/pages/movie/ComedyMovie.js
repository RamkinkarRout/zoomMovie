import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const ComedyMovie = () => {
  const [page, setPage] = useState(1);
  const Comedy_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&page=${page}`;
  return (
    <FetchMovie
      url={Comedy_URL}
      page={page}
      setPage={setPage}
      headerTitle="Comedy genre movies"
    />
  );
};

export default ComedyMovie;
