import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const ActionMovie = () => {
  const [page, setPage] = useState(1);
  const ACTION_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&page=${page}`;
  return (
    <FetchMovie
      url={ACTION_URL}
      page={page}
      setPage={setPage}
      headerTitle="ALL time popular movies"
    />
  );
};

export default ActionMovie;
