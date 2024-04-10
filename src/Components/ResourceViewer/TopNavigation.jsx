import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaBookReader,
} from "react-icons/fa";
import useDarkMode from "./useDarkMode";
import { IconButton, Typography } from "@material-tailwind/react";
import { CiRead, CiUnread } from "react-icons/ci";
import { useContext, useEffect, useRef } from "react";
import { viewerContext } from "./viewerContext";

const TopNavigation = () => {
  const {view,setView} = useContext(viewerContext)
  return (
    <div className="top-navigation bg-gray-300 dark:bg-[#313338]  px-7">
     
        <h5 className="title-text text-gray-500 dark:text-[#f2f3f5] pt-3">
          {view?.name || "Learning Resource Viewer"}
        </h5>
    
      <ThemeIcon />
      <Search />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  const topicListRef = useRef();
  useEffect(() => {
    if (darkTheme && topicListRef.current) {
      topicListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      document.body.style.overflow = "hidden";
    }

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [darkTheme]);
  return (
    <span onClick={handleMode} ref={topicListRef}>
      {darkTheme ? (
        <CiUnread size="32" className="top-navigation-icon" />
      ) : (
        <CiRead size="32" className="top-navigation-icon" />
      )}
    </span>
  );
};

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
);

const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
const Title = () => <h5 className="title-text">LearningReso</h5>;

export default TopNavigation;
