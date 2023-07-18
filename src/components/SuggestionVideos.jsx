import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import Videolength from "./Videolength";

const SuggestionVideos = ({ video }) => {
  return (
    <Link to={`/video-details/${video?.videoId}`}>
      <div className="flex mb-3">
        <div className="relative h-24 rounded-xl bg-slate-800 overflow-hidden lg:h-20 xl:h-24 w-40 min-w-[168px] xl:w-40 xl:min-w-[168px] lg:w-32 lg:min-w-[128px]">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
          />
          {video?.lengthSeconds && <Videolength time={video?.lengthSeconds} />}
        </div>
        <div className="overflow-hidden flex flex-col ml-3">
          <span className=" font-bold line-clamp-2 text-white text-sm lg:text-xs xl:text-sm">
            {video?.title}
          </span>
          <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
            {video?.author?.title}
            {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
            )}
          </span>
          <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">{video?.publishedTimeText}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionVideos;
