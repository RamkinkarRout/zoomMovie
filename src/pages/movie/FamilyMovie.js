import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const FamilyMovie = () => {
  const [page, setPage] = useState(1);
  const Family_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751&page=${page}`;
  return (
    <FetchMovie
      url={Family_URL}
      page={page}
      setPage={setPage}
      headerTitle="Family genre movies"
    />
  );
};

export default FamilyMovie;
