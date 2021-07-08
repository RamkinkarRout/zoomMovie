import React from "react";
import { NavLink } from "react-router-dom";

const GenreMovie = () => {
  return (
    <div
      className="container w-full bg-gradient-to-b from-black to-transparent opacity-80 shadow-lg"
      style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
    >
      <div className="px-4 mx-auto sm:px-8 flex text-center overflow-hidden whitespace-nowrap overflow-x-scroll  items-center text-gray-400 font-medium font-muli tracking-wide leading-sung h-10 scrollbar-hide space-x-8">
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-primary hover:scale-110 transform transition-all duration-100"
        >
          Trending
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/ScifiMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100"
        >
          Scifi
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/TopRatedMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Top Rated
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/PopularMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Popular
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/ActionMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Action
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/MysteryMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Mystery
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/DiscoverMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Discover
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/WesternMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Western
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/HorrorMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Horror
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/AnimationMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Animation
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/ComedyMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Comedy
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/WarMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          War
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/ThrillerMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Thriller
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/CrimeMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Crime
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/DramaMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Drama
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/FamilyMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Family
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/RomanceMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          Romance
        </NavLink>
        <NavLink
          activeStyle={{ color: "#fefe33" }}
          to="/HistoryMovie"
          className="text-xs sm:text-sm focus:text-yellow-600 hover:text-yellow-secondary hover:scale-110 transform transition-all duration-100 "
        >
          History
        </NavLink>
      </div>
    </div>
  );
};

export default GenreMovie;
