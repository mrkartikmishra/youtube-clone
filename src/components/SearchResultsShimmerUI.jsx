import React from "react";

const SearchResultsShimmerUI = () => {
  return (
    <div className="flex flex-col">
      {Array(10)
        .fill()
        .map(() => {
          return (
            <div className="flex mb-4">
              <div className="w-96 h-40 bg-secondary/[0.4] mr-4"></div>
              <div className="flex flex-col w-full">
                <div className="w-[70%] h-10 bg-secondary/[0.4]"></div>
                <div className="w-1/3 mt-4 h-10 bg-secondary/[0.4]"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SearchResultsShimmerUI;
