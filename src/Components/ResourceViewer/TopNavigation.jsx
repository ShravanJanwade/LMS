import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
    FaBookReader,
  } from 'react-icons/fa';
  import useDarkMode from './useDarkMode';
import { Typography } from '@material-tailwind/react';
import { CiRead, CiUnread } from 'react-icons/ci';
import { useEffect, useRef } from 'react';
  
  
  const TopNavigation = () => {
    return (
      <div className='top-navigation px-7'>
          <h5  className='title-text' >
            Course Name
          </h5>
        <ThemeIcon />
        <Search />
        
      </div>
    );
  };
  
  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    const topicListRef=useRef();
    useEffect(() => {
      if (darkTheme && topicListRef.current) {
        topicListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, [darkTheme]);
    return (
      <span onClick={handleMode} ref={topicListRef}>
        {darkTheme ? (
          <CiUnread size='32' className='top-navigation-icon'/>
         
         
        ) : (
          <CiRead  size='32' className='top-navigation-icon' />
        )}
      </span>
    );
  };
  
  const Search = () => (
    <div className='search'>
      <input className='search-input' type='text' placeholder='Search...' />
      <FaSearch size='18' className='text-secondary my-auto' />
    </div>
  );

  const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
  const Title = () => <h5 className='title-text'>LearningReso</h5>;
  
  export default TopNavigation;