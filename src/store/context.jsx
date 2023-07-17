import { createContext, useEffect, useState } from "react";
import { fetchData } from "../utils/api";

export const Context = createContext();

const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchedCategory, setSearchedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const fetchYoutubeDataByCategoty = async (category) => {
      setLoading(true);
      const { contents } = await fetchData(`search/?q=${category}`);
      setLoading(false);
      setSearchResults(contents);
    };

    fetchYoutubeDataByCategoty(searchedCategory);
  }, [searchedCategory]);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchedCategory,
        setSearchedCategory,
        searchResults,
        setSearchResults,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;
