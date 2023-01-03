import React, { useMemo, useState } from 'react';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [isSearchIconOn, setIsSearchIconOn] = useState(true);
  const [isSearchBarOn, setIsSearchBarOn] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [localSave, setLocalSave] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [mealInProgress, setMealInProgress] = useState([]);
  const [drinkInProgress, setDrinkInProgress] = useState([]);

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

    // contém uma única receita que está em progresso
    mealInProgress,
    drinkInProgress,
    setMealInProgress,
    setDrinkInProgress,

    // array de arrays com todos os ingredientes da receita em
    ingredients,
    setIngredients,

    // diz se um input de ingrediente está marcado como check ou não
    isChecked,
    setIsChecked,

    // contém os dados dos ingredientes salvos no localStorage na chave inProgressRecipes
    localSave,
    setLocalSave,
  }), [user, setUser, isSearchIconOn, setIsSearchIconOn,
    isSearchBarOn, setIsSearchBarOn, mealInProgress,
    drinkInProgress, setMealInProgress,
    setDrinkInProgress, ingredients,
    setIngredients, isChecked,
    setIsChecked, localSave,
    setLocalSave,]);

  return (
    <MainContext.Provider value={ value }>
      { children }
    </MainContext.Provider>
  );
}

export default MainProvider;
