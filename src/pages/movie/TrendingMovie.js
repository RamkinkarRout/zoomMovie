import axios from "axios";
import React, { useEffect, useState } from "react";
import MyPagination from "../../components/MyPagination";
import SingleContent from "../../components/SingleContent";
import { API_KEY } from "../../config";
const Trending_movie = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const TRENDING_MOVIE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  const fetchTrending = async () => {
    const { data } = await axios.get(TRENDING_MOVIE_URL);
    setContent(data.results);
    setTotalPage(data.total_pages);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div className=" px-4 md:px-14 flex font-muli items-center justify-center flex-col bg-gradient-to-r from-black via-gray-900 to-black pt-5">
      <p className="text-sm text-yellow-secondary sm:text-lg font-medium pb-4 tracking-wide leading-relaxed uppercase opacity-75">
        Trending now in Movies
      </p>
      {/* -----------------------single Content---------------- */}
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
      {/* -------------------pagination------------- */}
      <div className="my-6 mx-auto">
        <MyPagination
          totalPage={totalPage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default Trending_movie;
