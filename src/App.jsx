import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import VideoDetails from "./pages/VideoDetails";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/search-results/:searchTerm"
          exact
          element={<SearchResults />}
        />
        <Route
          path="/video-details/:videoId"
          exact
          element={<VideoDetails />}
        />
      </Routes>
    </div>
  );
}
