import React from "react";

const ShimmerUI = () => {
  return (
    <>
      {Array(12)
        .fill()
        .map(() => (
          <div className="flex flex-col rounded-md">
            <div className="h-40 md:h-40 md:rounded-xl overflow-hidden relative bg-secondary/[0.4]"></div>
            <div className="flex items-center">
              <span className="h-10 w-10 rounded-full md:h-12 md:w-12 md:rounded-full bg-secondary/[0.4]"></span>
              <div className="flex flex-col w-full">
                <span className="h-[20px] w-3/4 ml-2 mt-1 md:h-[20px] rounded-md bg-secondary/[0.4]"></span>
                <span className="h-[20px] w-3/5 ml-2 mt-2 md:h-[20px] rounded-md bg-secondary/[0.4]"></span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ShimmerUI;
