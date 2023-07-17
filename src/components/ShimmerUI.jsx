import React from "react";

const ShimmerUI = () => {
  return (
    <>
      {Array(12)
        .fill()
        .map(() => (
          <div className="flex flex-col mb- rounded-md">
            <div className="h-40 md:h-40 md:rounded-xl overflow-hidden relative bg-secondary/[0.5]"></div>
            <div className="flex items-center">
              <span className="h-14 w-14 rounded-full md:h-14 md:w-14 md:rounded-full bg-secondary/[0.5]"></span>
              <div className="flex flex-col w-full">
                <span className="h-[30px] w-3/4 ml-2 mt-1 md:h-[30px] rounded-md bg-secondary/[0.5]"></span>
                <span className="h-[30px] w-3/5 ml-2 mt-2 md:h-[30px] rounded-md bg-secondary/[0.5]"></span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ShimmerUI;
