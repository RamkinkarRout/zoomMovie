import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "../movie/FetchMovie";

const ActionSeries = () => {
  const [page, setPage] = useState(1);
  const Trending_URL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&page=${page}`;
  return (
    <FetchMovie
      url={Trending_URL}
      page={page}
      setPage={setPage}
      headerTitle="Trending now in Tv Series"
    />
  );
};

export default ActionSeries;
