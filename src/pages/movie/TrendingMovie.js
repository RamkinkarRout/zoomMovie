import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent";
import { API_KEY } from "../../config";
const TRENDING_MOVIE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
const Trending_movie = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState("");
  const fetchTrending = async () => {
    const { data } = await axios.get(TRENDING_MOVIE_URL);
    setContent(data.results);
    setPage(data.total_pages);
  };
  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className=" px-4 md:px-14 flex font-muli items-center justify-center flex-col bg-gradient-to-r from-black via-gray-900 to-gray-900 pt-5">
      <p className="text-sm text-yellow-secondary sm:text-lg font-medium pb-4 tracking-wide leading-relaxed uppercase opacity-75">
        Trending now in Movies
      </p>
      <div className="flex flex-wrap items-center justify-center ">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              title={c.title}
              overView={c.overview}
              popularity={Math.floor(c.popularity)}
              posterPath={c.poster_path}
              voteAverage={c.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default Trending_movie;
