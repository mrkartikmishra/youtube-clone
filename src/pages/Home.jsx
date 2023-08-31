import React, { useContext, useEffect } from "react";
import Sidenav from "../components/Sidenav";
import { Context } from "../store/context";
import VideoCard from "../components/VideoCard";
import ShimmerUI from "../components/ShimmerUI";
import ButtonList from "../components/ButtonList";

const Home = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex h-[calc(100%-56px)] pt-10">
      <Sidenav />
      <div className="w-[calc(100%-40px)] h-full overflow-y-auto bg-primary grow">
        <div className="overflow-x-scroll">
          <ButtonList />
        </div>
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {loading ? (
            <ShimmerUI />
          ) : (
            searchResults?.length &&
            searchResults?.map((item, index) => {
              if (item?.type !== "video") return false;
              return (
                <VideoCard
                  key={item?.video?.videoId + index}
                  video={item?.video}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
