import React from "react";
import { Link } from "react-router-dom";

const GenreMovie = () => {
  return (
    <div
      className="container w-full bg-gradient-to-b from-black to-transparent opacity-80 shadow-lg"
      style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
    >
      <div className="px-4 mx-auto sm:px-8 flex text-center overflow-hidden whitespace-nowrap overflow-x-scroll  items-center text-gray-400 font-medium font-muli tracking-wide leading-sung h-10 scrollbar-hide space-x-8">
        <Link
          to="/"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-primary hover:scale-110 transform transition-all duration-100"
        >
          SciFi
        </Link>
        <Link
          to="/TrendingMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100"
        >
          Trending
        </Link>
        <Link
          to="/TopRatedMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Top Rated
        </Link>
        <Link
          to="/PopularMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Popular
        </Link>
        <Link
          to="/ActionMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Action
        </Link>
        <Link
          to="/MysteryMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Mystery
        </Link>
        <Link
          to="/DiscoverMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Discover
        </Link>
        <Link
          to="/WesternMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Western
        </Link>
        <Link
          to="/HorrorMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Horror
        </Link>
        <Link
          to="/AdventureMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Adventure
        </Link>
        <Link
          to="/ComedyMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Comedy
        </Link>
        <Link
          to="/WarMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          War
        </Link>
        <Link
          to="/ThrillerMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Thriller
        </Link>
        <Link
          to="/CrimeMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Crime
        </Link>
        <Link
          to="/DramaMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Drama
        </Link>
        <Link
          to="/FamilyMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Family
        </Link>
        <Link
          to="/FantasyMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Fantasy
        </Link>
        <Link
          to="/HistoryMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          History
        </Link>
      </div>
    </div>
  );
};

export default GenreMovie;
