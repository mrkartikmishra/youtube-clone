import React from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import Videolength from "./Videolength";
import { abbreviateNumber } from "js-abbreviation-number";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video-details/${video?.videoId}`}>
      <div className="flex flex-col mb-8 hover:scale-105 duration-500">
        <div className="h-48 md:h-40 md:rounded-xl overflow-hidden relative">
          <img
            className="object-cover h-full w-full"
            src={video?.thumbnails?.[0]?.url}
          />
          {video?.lengthSeconds && <Videolength time={video?.lengthSeconds} />}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={video?.author?.avatar?.[0]?.url}
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="line-clamp-2 text-sm font-semibold">
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
