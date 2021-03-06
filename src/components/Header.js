import React from "react";
import { NavLink } from "react-router-dom";
import Avtar from "../image/Avtar.jpg";
import { Search } from "@material-ui/icons";

const Header = () => {
  return (
    <div className=" container text-gray-400 font-regular h-12 border-b-2 text-xs sm:text-sm md:text-sm border-black bg-gradient-to-t from-black to-black opacity-80 shadow-2xl font-muli">
      <div className="mx-auto px-4 md:px-12 flex justify-between  h-12 tracking-wider leading-snug ">
        {/* ------------logo--------------- */}
        <div className=" flex font-semibold items-center justify-start cursor-pointer">
          <span className="md:text-lg text-base text-yellow-primary tracking-wider leading-sn  hover:scale-110 transform transition-all duration-100">
            ZOOM
          </span>
        </div>

        {/* ------------center nav------------ */}
        <div className="flex items-center justify-center space-x-1 sm:space-x-4 md:space-x-6 uppercase font-medium">
          <NavLink
            activeStyle={{ color: "#fefe33" }}
            to="/"
            className="hover:text-yellow-primary hover:scale-110 transform transition-all duration-15 focus:text-yellow-primary "
          >
            Movies
          </NavLink>
          <NavLink
            activeStyle={{ color: "#fefe33" }}
            to="/Tvshows"
            className="hover:text-yellow-primary hover:scale-110 transform transition-all duration-150 focus:text-yellow-primary"
          >
            TvShows
          </NavLink>
          <NavLink
            activeStyle={{ color: "#fefe33" }}
            to="/Search"
            className="hover:text-yellow-primary hover:scale-110 transform transition-all duration-150 hidden sm:block focus:text-yellow-primary "
          >
            Search
          </NavLink>
          <NavLink
            activeStyle={{ color: "#fefe33" }}
            to="/About"
            className="hover:text-yellow-primary hover:scale-110 transform transition-all duration-150 focus:text-yellow-primary"
          >
            About
          </NavLink>
        </div>
        <div className="flex items-center justify-end space-x-1 sm:space-x-2 md:space-x-4">
          <NavLink
            activeStyle={{ color: "#fefe33" }}
            to="/Search"
            className="hover:text-yellow-primary  hover:scale-110 transform transition-all duration-150 focus:text-yellow-primary"
          >
            <Search fontSize="small" />
          </NavLink>
          <img
            src={Avtar}
            alt="Profile"
            className="rounded-full w-5 h-5 object-contain object-center hover:scale-110 transform transition-all duration-150"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
