import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import Videolength from "./Videolength";
import { abbreviateNumber } from "js-abbreviation-number";

const SearchResultsVideoCard = ({ video }) => {
  return (
    <Link to={`/video-details/${video?.videoId}`}>
      <div className="flex flex-col rounded-xl md:p-4 md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1]">
        <div className="bg-slate-800 overflow-hidden h-48 md:h-28 lg:h-40 xl:h-48 w-full relative md:w-48 lg:w-64 xl:w-80 rounded-xl flex shrink-0 ">
          <img
            className="object-cover h-full w-full"
            src={video?.thumbnails?.[0]?.url}
          />
          {video?.lengthSeconds && <Videolength time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
          <span className="text-white text-lg md:text-xl mb-2 font-semibold line-clamp-2">
            {video?.title}
          </span>
          <div className="hidden md:flex items-center">
            <div className="flex items-start mr-3">
              <div className="flex h-10 w-10  rounded-full overflow-hidden">
                <img
                  src={video?.author?.avatar?.[0].url}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center text-sm font-semibold mt-2 text-white/[0.6]">
                {video?.author?.title}
                {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="ml-1 text-white/[0.9] text-[12px]" />
                )}
              </span>
            </div>
          </div>
          <span className="empty:hidden md:pr-24 md:my-4 line-clamp-1 md:line-clamp-2 text-white/[0.7]">
            {video?.descriptionSnippet}
          </span>
          <div className="flex leading-none font-semibold text-white/[0.7] text-[16px] top-[-10px] relative">
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span className="font-bold text-[24px] text-white/[0.7] flex items-center relative top-[-7px] mx-1 leading-none">
              .
            </span>
            <span className="truncate">{video?.publishedTimeText}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultsVideoCard;
