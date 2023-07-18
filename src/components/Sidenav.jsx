import React, { useContext } from "react";

import { categories } from "../utils/constant";
import SideMenuItem from "./SideMenuItem";
import { Context } from "../store/context";
import { useNavigate } from "react-router-dom";

const Sidenav = () => {
  const { searchedCategory, setSearchedCategory, mobileMenu } =
    useContext(Context);

  const onSelectMenuItem = (name, type) => {
    switch (type) {
      case "category":
        return setSearchedCategory(name);
      case "home":
        return setSearchedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`${
        mobileMenu && "translate-x-0"
      } md:block w-[240px] overflow-y-auto h-full bg-primary absolute md:relative z-50 translate-x-[-240px] md:translate-x-0 transition-all`}
    >
      <div className="flex px-5 flex-col">
        {categories?.map((category) => {
          return (
            <React.Fragment key={category?.name}>
              <SideMenuItem
                text={category?.type === "home" ? "Home" : category?.name}
                icon={category?.icon}
                action={() => {
                  onSelectMenuItem(category?.name, category?.type);
                  useNavigate()("/");
                }}
                className={`${
                  searchedCategory === category?.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {category?.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-sm">
          &copy;Clone by Kartik Mishra
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
