import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@material-ui/icons";
import { API_KEY, IMG_ORIGNAL } from "../config";
import SingleContent from "./SingleContent";
import { Button, TextField } from "@material-ui/core";

const ACTION_MOVIE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
const Search = () => {
  const [banner, setBanner] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchvalue, setSearchvalue] = useState([]);
  // -----------------------fetch banner----------------
  const fetchBanner = async () => {
    const { data } = await axios.get(ACTION_MOVIE);
    setBanner(
      data.results[
        Math.floor(Math.random() * data.results.length)
      ]
    );
  };

  // ----------------fetchResult------------------
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`;
  console.log(searchText);
  const fetchResult = async () => {
    try {
      const { data } = await axios.get(SEARCH_URL);
      setSearchvalue(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(searchvalue);
  //   console.log(banner);

  useEffect(() => {
    fetchBanner();
    fetchResult();
  }, []);
  return (
    <>
      <div
        className="w-full -mt-24 bg-cover bg-center bg-no-repeat h-screen bg-black bg-blend-overlay bg-opacity-75 "
        style={{
          backgroundImage: `url(${IMG_ORIGNAL}${banner.backdrop_path})`,
        }}
      >
        <div className="justify-center relative top-2/4 left-2/4 font-muli w-1 flex space-x-1">
          <SearchOutlined
            style={{ color: "yellow" }}
            fontSize="large"
            className="m-auto"
          />
          <input
            type="search"
            placeholder="Search Movies"
            style={{ flex: "1" }}
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
            onSubmit={fetchResult()}
            className="px-4 text-gray-200 py-1 sm:px-8 text-left sm:py-2 md:px-14 md:py-2 bg-transparent border-2 border-gray-400  focus:outline-none focus:ring-black  focus:ring-2"
          />
        </div>
      </div>

      {/* -----------------------single Content---------------- */}
      <div className="flex flex-wrap items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-70 py-6">
        {searchvalue &&
          searchvalue.map((c) => (
            <SingleContent
              backdrop_path={c.backdrop_path}
              key={c.id}
              id={c.id}
              title={c.title || c.name}
              overView={c.overview}
              popularity={Math.floor(c.popularity)}
              posterPath={c.poster_path}
              voteAverage={c.vote_average}
              media_type={c.media_type}
            />
          ))}
        {searchText && !searchvalue && "No Movies Found"}
      </div>
    </>
  );
};

export default Search;
