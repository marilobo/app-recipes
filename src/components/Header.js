import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <div>
      <img src={ profileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
      <img src={ searchIcon } alt="Search Icon" data-testid="search-top-btn" />
    </div>
  )
}

export default Header;
