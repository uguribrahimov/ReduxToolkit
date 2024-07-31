import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../slice/ThemeSlice';

const Theme = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
   <div>
     <button onClick={handleToggle}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
    {"      "}
    <span>Dark mode is {darkMode.toString()}</span>
   </div>
    
  )
  
};

export default Theme;
