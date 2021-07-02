import React from "react";
import { Link } from "react-router-dom";

const Genre_movie = () => {
  return (
    <div
      className="container w-full bg-gradient-to-b from-black to-transparent opacity-80 shadow-lg"
      style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
    >
      <div className="px-4 mx-auto sm:px-8 flex text-center overflow-hidden whitespace-nowrap overflow-x-scroll  items-center text-gray-400 font-medium font-muli tracking-wide leading-sung h-10 scrollbar-hide space-x-8">
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-primary hover:scale-110 transform transition-all duration-100"
        >
          Trending
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100"
        >
          Discover
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Top Rated
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Popular
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Action
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Mystery
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          SciFi
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Western
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Horror
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Adventure
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Comedy
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          War
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Thriller
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Crime
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Drama
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Family
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Fantasy
        </Link>
        <Link
          path=""
          className="text-xs sm:text-sm hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          History
        </Link>
      </div>
    </div>
  );
};

export default Genre_movie;
