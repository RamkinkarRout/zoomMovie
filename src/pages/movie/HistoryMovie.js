import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const HistoryMovie = () => {
  const [page, setPage] = useState(1);
  const History_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36&page=${page}`;
  return (
    <FetchMovie
      url={History_URL}
      page={page}
      setPage={setPage}
      headerTitle="History genre movies"
    />
  );
};

export default HistoryMovie;
