import React from "react";
import Avtar from "../image/Avtar.jpg";
import { IMG_ORIGNAL } from "../config";
import {
  StarOutlineOutlined,
  ThumbUpAltOutlined,
  Add,
} from "@material-ui/icons";

const SingleContent = ({
  id,
  title,
  overView,
  posterPath,
  popularity,
  voteAverage,
}) => {
  return (
    <div className="mr-6 mb-6 font-muli text-gray-200 relative">
      <div className="bg-dark bg-blend-darken hover:scale-110 transform duration-300 ease-in-out z-50 ">
        <img
          id={id}
          src={
            posterPath
              ? `${IMG_ORIGNAL}${posterPath}`
              : Avtar
          }
          alt={title}
          className="h-80 object-contain opacity-70 rounded-md "
        ></img>
        <div className="absolute inset-0 pt-20 flex flex-col items-start pl-2 opacity-0 hover:opacity-80 duration-300 transform-none">
          <p className="font-semibold text-sm uppercase tracking-wide pb-2 opacity-90">
            {title}
          </p>

          <div className="text-xs leading-snug tracking-wide opacity-70 h-20 overflow-ellipsis overflow-hidden">
            {overView}
          </div>

          <div className="flex pb-2 space-x-3 py-4 opacity-90">
            <div className="flex items-center space-x-1">
              <StarOutlineOutlined
                fontSize="inherit"
                style={{ color: "#fefe33" }}
              />
              <p className="uppercase text-xs">
                imdb:{" "}
                <span
                  className={`font-bold ${
                    voteAverage > 7
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {voteAverage}
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-1 ">
              <ThumbUpAltOutlined
                fontSize="inherit"
                style={{ color: "#fefe33" }}
              />
              <p className="uppercase text-xs">
                Likes: {popularity}
              </p>
            </div>
          </div>
          <div className=" mt-4 flex mx-auto items-center space-x-1 py-1 px-6 bg-gray-300 hover:bg-yellow-secondary rounded-full cursor-pointer opacity-90">
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
    </div>
  );
};

export default SingleContent;
