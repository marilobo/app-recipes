import React, { useMemo, useState } from 'react';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [isSearchIconOn, setIsSearchIconOn] = useState(true);
  const [isSearchBarOn, setIsSearchBarOn] = useState(false);

  const value = useMemo(() => ({
    // armazena os dados que o usuário digitou na tela de login
    user,
    setUser,
    // dita o aparecimento ou não do ícone de pesquisa do Header
    isSearchIconOn,
    setIsSearchIconOn,
    // dita o aparecimento ou não do Search Bar no Header
    isSearchBarOn,
    setIsSearchBarOn,
  }), [user, setUser, isSearchIconOn, setIsSearchIconOn, isSearchBarOn, setIsSearchBarOn]);

  return (
    <MainContext.Provider value={ value }>
      { children }
    </MainContext.Provider>
  );
}

export default MainProvider;
