import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import Videolength from "./Videolength";
import { abbreviateNumber } from "js-abbreviation-number";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video-details/${video?.videoId}`}>
      <div className="flex flex-col mb-8 duration-500 hover:scale-105">
        <div className="relative overflow-hidden h-52 md:h-48 md:rounded-xl">
          <img
            className="object-cover w-full h-full"
            src={video?.thumbnails?.[0]?.url}
          />
          {video?.lengthSeconds && <Videolength time={video?.lengthSeconds} />}
        </div>
        <div className="flex mt-3 text-white">
          <div className="flex items-start">
            <div className="flex overflow-hidden rounded-full h-9 w-9">
              <img
                className="object-cover w-full h-full"
                src={video?.author?.avatar?.[0]?.url}
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-semibold line-clamp-2">
              {video?.title}
            </span>
            <span className="text-xs font-semibold mt-2 text-white/[0.7] flex items-center">
              {video?.author?.title}
              {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="ml-1 text-white/[0.9] text-[12px]" />
              )}
            </span>
            <div className="flex items-center text-[12px] font-semibold overflow-hidden truncate text-white/[0.7]">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="font-bold text-[24px] text-white/[0.7] flex items-center relative top-[-7px] mx-1 leading-none">
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
