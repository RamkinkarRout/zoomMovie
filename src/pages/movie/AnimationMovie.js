import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const AnimationMovie = () => {
  const [page, setPage] = useState(1);
  const Animation_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&page=${page}`;
  return (
    <FetchMovie
      url={Animation_URL}
      page={page}
      setPage={setPage}
      headerTitle="Animation genre movies"
    />
  );
};

export default AnimationMovie;
