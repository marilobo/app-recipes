import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainContext from '../context/MainContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const { isSearchIconOn, setIsSearchIconOn } = useContext(MainContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/done-recipes' || pathname === 'favorite-recipes') {
      setIsSearchIconOn(false)
    } else {
      setIsSearchIconOn(true)
    }
  }, [pathname, setIsSearchIconOn]);

  return (
    <div>
      <img src={ profileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
      <h1>{ title }</h1>
      {
        isSearchIconOn ? (
        <img src={ searchIcon } alt="Search Icon" data-testid="search-top-btn" />
        ) : null
      }
    </div>
  )
}

export default Header;
