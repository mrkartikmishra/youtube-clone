import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/context";
import { fetchData } from "../utils/api";
import Sidenav from "../components/Sidenav";
import SearchResultsVideoCard from "../components/SearchResultsVideoCard";
import SearchResultsShimmerUI from "../components/SearchResultsShimmerUI";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { searchTerm } = useParams();
  const { loading, setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    const getSearchResultData = async () => {
      setLoading(true);
      const { contents } = await fetchData(`search/?q=${searchTerm}`);
      setSearchResults(contents);
      setLoading(false);
    };
    getSearchResultData();
  }, [searchTerm]);

  return (
    <div className="flex h-[calc(100%-56px)]">
      <Sidenav />
      <div className="h-full w-[calc[100%-240px]] overflow-y-auto grow bg-primary">
        <div className="grid grid-cols-1 gap-2 p-5">
          {loading ? (
            <SearchResultsShimmerUI />
          ) : (
            searchResults?.map((data) => {
              if (data?.type !== "video") return false;
              return (
                <SearchResultsVideoCard
                  key={data?.video?.videoId}
                  video={data?.video}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
