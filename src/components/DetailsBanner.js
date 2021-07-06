import React from "react";
import { IMG_ORIGNAL, W_300 } from "../config";
import {
  StarOutlineOutlined,
  ThumbUpAltOutlined,
  EventNoteOutlined,
  AccessTime,
  SupervisorAccountOutlined,
} from "@material-ui/icons";
import DetailCrew from "./DetailCrew";
const DetailsBanner = ({
  backdrop_path,
  poster_path,
  title,
  release_date,
  tagline,
  vote_average,
  vote_count,
  genres,
  overView,
  runtime,
  status,
  budget,
  popularity,
  crew,
}) => {
  console.log(crew);
  return (
    <>
      <div
        className="w-full font-muli -mt-24 bg-cover bg-fixed bg-center bg-no-repeat bg-black bg-blend-darken bg-opacity-50"
        style={{
          backgroundImage: `url(${IMG_ORIGNAL}${backdrop_path})`,
          height: "100vh",
        }}
      >
        <div className="flex justify-items-center items-end gap-5 md:gap-10 absolute bottom-28 sm:left-14">
          <img
            className="object-contain z-20 w-24 sm:w-60  md:-mb-52 rounded-xl"
            src={`${W_300}${poster_path}`}
          ></img>
          <div className="flex flex-col items-cenet justify-start text-white opacity-75">
            <h1 className="font-medium uppercase tracking-widest text-xl sm:text-2xl md:text-3xl leading-relaxed">
              {title}
            </h1>
            <p className="tracking-wider leading-tight text-xs font-medium py-2 opacity-75 truncate ">
              {tagline}
            </p>

            {/* ------------------------ratings---------- */}
            <div className="flex space-x-4 pb-2 text-xs uppercase font-medium opacity-90">
              <div className="flex items-center space-x-1">
                <StarOutlineOutlined
                  fontSize="small"
                  style={{ color: "#fefe33" }}
                />
                <p className="uppercase text-xs">
                  imdb:{" "}
                  <span
                    className={`font-bold ${
                      vote_average > 7
                        ? "text-green-500"
                        : "text-red-500 "
                    }`}
                  >
                    {" "}
                    {vote_average}
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbUpAltOutlined
                  fontSize="small"
                  style={{ color: "#fefe33" }}
                />
                <p className="uppercase text-xs">
                  Likes: {Math.floor(popularity)}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <EventNoteOutlined
                  fontSize="small"
                  style={{ color: "#fefe33" }}
                />

                {/* -------------------airDate------------ */}
                <p className="uppercase text-xs ">
                  year: {release_date}
                </p>
              </div>
            </div>

            <div className="flex space-x-4 pb-2 text-xs uppercase font-medium opacity-90">
              {/* -------------------runtime------------ */}
              <div className="flex items-center space-x-1">
                <AccessTime
                  fontSize="small"
                  style={{ color: "#fefe33" }}
                />
                <p className="uppercase ">
                  Runtime: {(runtime / 60).toFixed(2)}
                  <span className="lowercase pl-1">
                    hrs
                  </span>
                </p>
              </div>
              {/* ----------------voteCount------------------- */}
              <div className="flex items-center space-x-1">
                <SupervisorAccountOutlined
                  fontSize="small"
                  style={{ color: "#fefe33" }}
                />
                <p className="uppercase ">
                  Vote Count: {vote_count}
                </p>
              </div>
            </div>
            <div className="flex space-x-4 text-xs font-medium sm:text-black text-yellow-primary group ">
              {genres &&
                genres.map((c) => (
                  <p className="sm:bg-yellow-primary sm:rounded-full sm:py-1 sm:px-2 tracking-wide opacity-80 group-hover:opacity-100 ">
                    {c.name}
                  </p>
                ))}
            </div>
          </div>
          {/* ---------------posterImage------------ */}
        </div>
        <div className="w-full h-12 text-white  absolute bottom-0 "></div>
      </div>
      {/* -------------------body----------------- */}
      <div className="absolute bottom-0 -mb-5 sm:-mb-0 bg-gradient-to-t from-black via-black to-transparent w-full h-12 opacity-75"></div>
      <div className="bg-gradient-to-r from-black via-gray-900 to-black font-muli w-full h-screen">
        <div className="w-full flex flex-col sm:flex-row sm:gap-28 lg:gap-1 text-white items-center justify-center opacity-90">
          <div className="flex flex-col mt-2  lg:w-80 w-48 sm:px-4 md:px-14 opacity-80 items-center sm:items-start">
            <div className="flex text-xs gap-1 sm:gap-24  items-start pb-2 sm:pb-4">
              <p className="uppercase text-yellow-primary">
                status:
              </p>
              <p className="uppercase text-white ">
                {status}
              </p>
            </div>
            <div className="flex text-xs gap-1 sm:gap-24 pb-2">
              <p className="uppercase text-yellow-primary  ">
                budget:
              </p>
              <p className="uppercase text-white ">
                {budget}
              </p>
            </div>
          </div>
          <div className="flex flex-col  w-full flex-grow items-center mt-5 sm:items-start ">
            <h1 className="tracking-widest font-medium uppercase leading-snug text-white text-sm pb-2">
              overView:
            </h1>
            <p className="text-xs font-light opactity-75 leading-snug tracking-wider text-gray-400 w-full lg:w-3/4 pb-2">
              {overView}
            </p>
            <h1 className="tracking-widest font-medium uppercase leading-snug text-white text-sm pb-4">
              Crew:
            </h1>
            <div className=" flex w-full sm:w-5/6 overflow-hidden relative overflow-x-scroll scrollbar-hide space-x-1 ">
              {crew &&
                crew.map((c) => (
                  <img
                    src={
                      c.profile_path
                        ? `${W_300}${c.profile_path}`
                        : "no picture"
                    }
                    alt={c.name}
                    title={c.name}
                    className="object-containh-52 rounded-lg opacity-75 hover:opacity-100 h-52"
                  ></img>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBanner;
