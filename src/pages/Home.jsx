import React, { useContext, useEffect } from "react";
import Sidenav from "../components/Sidenav";
import { Context } from "../store/context";
import VideoCard from "../components/VideoCard";
import ShimmerUI from "../components/ShimmerUI";

const Home = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex h-[calc(100%-56px)]">
      <Sidenav />
      <div className="w-[calc(100%-40px)] h-full overflow-y-auto bg-primary grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {loading ? (
            <ShimmerUI />
          ) : (
            searchResults?.length &&
            searchResults?.map((item) => {
              if (item?.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
