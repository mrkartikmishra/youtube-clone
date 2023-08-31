import React, { useContext } from "react";
import { Context } from "../store/context";

const buttons = [
  {
    name: "All",
    category: "all",
  },
  {
    name: "Javascript",
    category: "javascript",
  },
  {
    name: "Bitcoin",
    category: "bitcoin",
  },
  {
    name: "Editing",
    category: "editing",
  },
  {
    name: "DevOps",
    category: "devops",
  },
  {
    name: "Java",
    category: "java",
  },
  {
    name: "AI",
    category: "ai",
  },
  {
    name: "Live",
    category: "live",
  },
  {
    name: "Mixes",
    category: "mixes",
  },
  {
    name: "Accounting",
    category: "accounting",
  },
  {
    name: "Music",
    category: "music",
  },
  {
    name: "Smartphones",
    category: "smartphones",
  },
  {
    name: "Arijit Singh",
    category: "arijit singh",
  },
  {
    name: "Watched",
    category: "watched",
  },
  {
    name: "Games",
    category: "games",
  },
];

const ButtonList = () => {
  const { setSearchedCategory } = useContext(Context);
  return (
    <div className="text-white xl:flex w-full gap-3 ml-5 overflow-x-scroll scrollbar-hide hidden">
      {buttons.map((button) => (
        <span
          className="mr-2 bg-secondary/[0.8] hover:bg-secondary hover:text-white lg:py-1 lg:px-1 rounded-md cursor-pointer"
          onClick={() => setSearchedCategory(button.category)}
        >
          {button.name}
        </span>
      ))}
    </div>
  );
};

export default ButtonList;
