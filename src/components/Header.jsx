import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { BiMicrophone } from "react-icons/bi";

import { Context } from "../store/context";
import logo from "../assets/yt-logo.png";
import mobileLogo from "../assets/yt-logo-mobile.png";
import Loader from "./Loader";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const page = pathname?.split("/").filter(Boolean)?.[0];

  const onSearchHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchBtn") &&
      searchTerm?.length > 0
    ) {
      navigate(`/search-results/${searchTerm}`);
    }
  };

  const menuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="sticky top-0 flex items-center justify-between px-4 h-14 md:px-5 bg-primary z-99">
      {loading && <Loader />}

      {/** LOGO Section */}
      <div className="flex items-center h-5">
        {page !== "video" && (
          <div
            onClick={menuToggle}
            className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-secondary/[0.6] md:hidden cursor-pointer md:mr-5"
          >
            {mobileMenu ? (
              <CgClose className="text-white" />
            ) : (
              <SlMenu className="text-white" />
            )}
          </div>
        )}
        <Link to={"/"} className="flex items-center h-5">
          <img
            src={logo}
            alt="Youtube Logo"
            className="hidden h-full md:block"
          />
        </Link>
        <Link to={"/"} className="flex items-center h-5">
          <img
            src={mobileLogo}
            alt="Youtube Logo"
            className="h-full md:hidden"
          />
        </Link>
      </div>
      {/** Search Bar */}
      <div className="flex items-center group">
        <div className="flex h-8 border md:h-10 md:ml-10 md:pl-5 border-secondary rounded-l-3xl group-focus-within:border-red md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="items-center justify-center hidden w-10 group-focus-within:md:flex">
            <IoIosSearch className="text-xl text-white" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyUp={onSearchHandler}
            className="bg-transparent outline-none text-white pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          />
        </div>
        <button className="flex items-center justify-center border border-l-0 border-secondary rounded-r-3xl bg-white/[0.1] w-[40px] md:w-[60px] h-8 md:h-10">
          <IoIosSearch className="text-xl text-white" />
        </button>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary/[0.8] hover:bg-secondary cursor-pointer ml-2">
          <BiMicrophone className="text-xl text-white" />
        </div>
      </div>
      {/** Right Section */}
      <div className="items-center justify-between hidden md:flex">
        <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-secondary/[0.6]">
          <RiVideoAddLine className="text-xl text-white cursor-pointer" />
        </div>
        <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-secondary/[0.6] ml-2 relative">
          <FiBell className="text-xl text-white cursor-pointer" />
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-red">
            9+
          </span>
        </div>
        <div className="flex items-center justify-center h-8 w-8 md:ml-4 cursor-pointer rounded-full hover:bg-secondary/[0.6]">
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
