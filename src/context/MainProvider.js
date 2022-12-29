import React, { useMemo, useState } from 'react';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const value = useMemo(() => ({
    user,
    setUser,
  }), [user, setUser]);

  return (
    <MainContext.Provider value={ value }>
      { children }
    </MainContext.Provider>
  );
}

export default MainProvider;
