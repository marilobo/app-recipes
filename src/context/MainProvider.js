import React, { useMemo, useState } from 'react';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [isSearchIconOn, setIsSearchIconOn] = useState(true);

  const value = useMemo(() => ({
    user,
    setUser,
    isSearchIconOn,
    setIsSearchIconOn,
  }), [user, setUser, isSearchIconOn, setIsSearchIconOn]);

  return (
    <MainContext.Provider value={ value }>
      { children }
    </MainContext.Provider>
  );
}

export default MainProvider;
