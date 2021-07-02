import React, { useEffect, useState } from "react";
import Header from "./Header";
import Genre_movie from "./GenreMovie";
import axios from "axios";
import { API_KEY, IMG_ORIGNAL } from "../config";
// import { Link } from "react-router-dom";
import {
  StarOutlineOutlined,
  ThumbUpAltOutlined,
  EventNoteOutlined,
  PlayArrow,
  Add,
} from "@material-ui/icons";

const Banner = () => {
  const TRENDING_ALL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`;
  const [content, setContent] = useState([]);
  const fetchBanner = async () => {
    const { data } = await axios.get(TRENDING_ALL);
    // console.log(data.results);
    setContent(
      data.results[
        Math.floor(Math.random() * data.results.length)
      ]
    );
    console.log(content);
  };

  useEffect(() => {
    fetchBanner();
  }, []);
  const imdb_movie = `${content.release_date}`;

  return (
    <div
      className="w-full relative bg-cover bg-center bg-no-repeat h-screen bg-black bg-blend-darken bg-opacity-50"
      style={{
        backgroundImage: `url(${IMG_ORIGNAL}${content.backdrop_path})`,
      }}
    >
      <Header />
      <Genre_movie />
      <div className="flex text-white opacity-75 flex-col absolute top-40 sm:top-80 left-4 mx-auto sm:left-8 md:left-12 items-start w-10/12 sm:w-8/12  tracking-wider leading-snug">
        <div className="flex flex-col py-2">
          <p className="font-normal text-yellow-primary text-xs uppercase">
            Today's Featured Film
          </p>
          <h1 className="font-bold uppercase tracking-widest text-xl sm:text-2xl md:text-3xl leading-relaxed">
            {content.title || content.name}
          </h1>
        </div>
        <div className="flex space-x-4 pb-2 text-xs uppercase font-medium">
          <div className="flex items-center space-x-1">
            <StarOutlineOutlined
              fontSize="small"
              style={{ color: "#fefe33" }}
            />
            <p className="uppercase text-xs">
              imdb:{" "}
              <span
                className={`font-bold ${
                  content.vote_average > 7
                    ? "text-green-500"
                    : "text-red-500 "
                }`}
              >
                {" "}
                {content.vote_average}
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <ThumbUpAltOutlined
              fontSize="small"
              style={{ color: "#fefe33" }}
            />
            <p className="uppercase text-xs">
              Likes: {Math.floor(content.popularity)}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <EventNoteOutlined
              fontSize="small"
              style={{ color: "#fefe33" }}
            />
            <p className="uppercase text-xs">
              year: {imdb_movie.substr(0, 4)}
            </p>
          </div>
        </div>
        <p className="opacity-70 text-xs pb-2 ">
          {content.overview}
        </p>
        <div className="flex flex-col sm:flex-row mx-auto sm:mx-0 items-center justify-center pt-4 space-x-1 sm:space-x-2">
          <div className="flex items-center space-x-1 px-3 py-1 sm:px-5 sm:py-2 bg-yellow-secondary rounded-full mb-2 sm:mb-0 cursor-pointer group">
            <PlayArrow
              fontSize="small"
              style={{ color: "black" }}
            />
            <p className="uppercase text-xs text-black group-hover:text-gray-500">
              watch trailer
            </p>
          </div>
          <div className="flex items-center space-x-1 px-3 py-1 sm:px-5 sm:py-2 bg-gray-300 hover:bg-yellow-secondary rounded-full cursor-pointer">
            <Add
              fontSize="small"
              style={{ color: "black" }}
            />
            <p className="uppercase text-xs text-black">
              watch details
            </p>
          </div>
        </div>
      </div>
      <div className="h-14 w-full absolute bg-gradient-to-t from-gray-900 via-black to-transparent opacity-50 bottom-0"></div>
    </div>
  );
};

export default Banner;
