import React from "react";

const SideMenuItem = ({ text, icon, action, className }) => {
  return (
    <div
      onClick={action}
      className={
        className +
        " text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-secondary"
      }
    >
      <span className="mr-5 text-xl text-red">{icon}</span>
      {text}
    </div>
  );
};

export default SideMenuItem;
