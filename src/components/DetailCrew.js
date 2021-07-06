import React from "react";
import { W_300 } from "../config";

const DetailCrew = ({ name, profile_path }) => {
  console.log(profile_path);
  return (
    <div className="flex overflow-hidden flex-wrap overflow-x-scroll scrollbar-hide space-x-1 ">
      <img
        src={
          profile_path
            ? `${W_300}${profile_path}`
            : "noPicture"
        }
        alt={name}
        className="object-contain h-36"
      />
    </div>
  );
};

export default DetailCrew;
