import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MainContext from '../context/MainContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title }) {
  const { isSearchIconOn, setIsSearchIconOn, isSearchBarOn, setIsSearchBarOn } = useContext(MainContext);
  const { pathname } = useLocation();
  const history = useHistory();

  const profileBtn = () => {
    history.push('/profile');
  };

  useEffect(() => {
    if (pathname === '/done-recipes' || pathname === '/favorite-recipes' || pathname === '/profile') {
      setIsSearchIconOn(false)
    } else {
      setIsSearchIconOn(true)
    }
  }, [pathname, setIsSearchIconOn]);

  return (
    <div>
      <input
        type="image"
        src={ profileIcon }
        alt="Profile Icon"
        data-testid="profile-top-btn"
        onClick={ profileBtn }
      />
      <h1>{ title }</h1>
      {
        isSearchIconOn ? (
        <input
          type="image"
          src={ searchIcon }
          alt="Search Icon"
          data-testid="search-top-btn"
          onClick={ () => isSearchBarOn ? setIsSearchBarOn(false) : setIsSearchBarOn(true) }
        />
        ) : null
      }
      <div>
        {
          isSearchBarOn ? (
            <SearchBar />
          ) : null
        }
      </div>
    </div>
  )
}

export default Header;
