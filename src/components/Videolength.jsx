import React from "react";

import moment from "moment";

const Videolength = ({ time }) => {
  return (
    <div className="absolute px-2 py-1 text-xs text-white rounded-md bottom-2 right-2 bg-primary">
      {moment().startOf("day").seconds(time).format("H:mm:ss")}
    </div>
  );
};

export default Videolength;
