import React from "react";

import moment from "moment";

const Videolength = ({ time }) => {
  return (
    <div className="absolute bottom-2 right-2 bg-primary py-1 px-2 text-white text-xs rounded-md">
      {moment().startOf("day").seconds(time).format("H:mm:ss")}
    </div>
  );
};

export default Videolength;
