import React, { useState } from "react";
import FetchMovie from "./FetchMovie";
import { API_KEY } from "../../config";
const ScifiMovie = () => {
  const [page, setPage] = useState(1);
  const SCIFI_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878&page=${page}`;
  return (
    <FetchMovie
      url={SCIFI_URL}
      page={page}
      setPage={setPage}
      headerTitle="SciFi BlockBuster Movies"
    />
  );
};

export default ScifiMovie;
