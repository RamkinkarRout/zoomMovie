import React from "react";
import {
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "@material-ui/icons";
const Footer = () => {
  return (
    <div className="w-full text-muli bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-75 h-1/3 text-white text-xs">
      <div className="flex flex-col sm:flex-row sm:justify-between justify-center container px-4 md:px-14 py-10">
        {/* -------------header---------------- */}
        <div className="flex flex-col items-center sm:items-start pb-4 sm:pb-0 space-y-2">
          <h1 className="font-semibold md:text-lg text-base text-yellow-primary tracking-wider leading-sn  hover:scale-110 transform transition-all duration-100">
            ZOOM
          </h1>
          <p className="opacity-80 font-light leading-snug tracking-wide">
            Powered By TheMovieDB API
          </p>
        </div>
        {/* -------------middle--------- */}
        <div className="flex flex-col items-center sm:items-start space-y-2  pb-4 sm:pb-0">
          <p className="opacity-80 leading-snug tracking-wide font-light">
            Zoom Fetures the most relevent Entertain
          </p>
          <div className="flex relative space-x-2">
            <input
              className="px-8 py-1 rounded-md  focus:outline-none focus:ring-yellow-primary  focus:ring-2"
              placeholder="YOUR E_MAIL"
            />
            <Mail
              style={{ color: "yellow" }}
              fontSize="small"
              className="absolute inset-0 -left-1 top-1 pb-1"
            />
            <button className="px-3 text-black opacity-90 animate-pulse py-1 rounded-md bg-yellow-primary">
              Sub Me
            </button>
          </div>
        </div>
        {/* -------------footer--------- */}
        <div className="flex flex-col items-center sm:items-start pb-4 sm:pb-0 space-y-2">
          <p className="opacity-90 font-medium leading-snug tracking-wider ">
            Follow Us
          </p>
          <div className="flex space-x-1 opacity-90">
            <a href="https://www.facebook.com/ramkinkar.rout">
              <Facebook
                style={{ color: "yellow" }}
                fontSize="small"
                className="animate-pulse crusor-pointer rounded-full"
              />
            </a>

            <a href="https://www.instagram.com/_ram_kinkar/">
              <Instagram
                style={{ color: "yellow" }}
                fontSize="small"
                className="animate-pulse crusor-pointer rounded-full"
              />
            </a>
            <a href="https://www.facebook.com/ramkinkar.rout">
              <Twitter
                style={{ color: "yellow" }}
                fontSize="small"
                className="animate-pulse rounded-full cursor-pointer"
              />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 py-4 w-full border-t-2 border-gray-400 text-gray-400">
        <p className="font-light uppercase leading-snug tracking-wide py-1">
          ©2021 ZooM,Movie Tvseries Entertaining Platform,
          All Rights Reserved.
        </p>
        <p className="text-sm text-yellow-primary ">
          R<span className="text-xs text-white">am</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
