import React from "react";
import { useState } from "react";
import { API_KEY } from "../../config";
import FetchMovie from "./FetchMovie";

const MysteryMovie = () => {
  const [page, setPage] = useState(1);
  const MYSTERY_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648&page=${page}`;
  return (
    <FetchMovie
      url={MYSTERY_URL}
      page={page}
      setPage={setPage}
      headerTitle="Love the Mystery types"
    />
  );
};

export default MysteryMovie;
