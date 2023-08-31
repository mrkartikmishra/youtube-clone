import React, { useContext, useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Context } from "../store/context";
import { fetchData } from "../utils/api";
import ReactPlayer from "react-player";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestionVideos from "../components/SuggestionVideos";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { videoId } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");

    const getVideoDetailsById = async () => {
      setLoading(true);
      const data = await fetchData(`video/details/?id=${videoId}`);
      setVideo(data);
      setLoading(false);
    };

    const getRelatedVideosById = async () => {
      setLoading(true);
      const data = await fetchData(`video/related-contents/?id=${videoId}`);
      setRelatedVideos(data);
      setLoading(false);
    };

    getVideoDetailsById();
    getRelatedVideosById();
  }, [videoId]);

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="mt-4 text-sm font-bold text-white md:text-xl">
            {video?.title}
          </div>
          <div className="flex flex-col justify-between mt-4 md:flex-row">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex overflow-hidden rounded-full h-11 w-11">
                  <img
                    className="object-cover w-full h-full"
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <div className="flex items-center font-semibold text-white text-md">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                  )}
                </div>
                <div className="text-white/[0.7] text-sm">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className="flex mt-4 text-white md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="mr-2 text-xl text-white" />
                {`${abbreviateNumber(video?.stats?.views, 2)} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                <AiOutlineEye className="mr-2 text-xl text-white" />
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px] no-scrollbar">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestionVideos key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
