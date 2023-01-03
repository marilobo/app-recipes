import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import requestMealsAPI from '../services/requestMealsAPI';
import requestDrinksAPI from '../services/requestDrinksAPI';

function SearchBar() {
  
  const [filterSearch, setFilterSearch] = useState({});
  const [resultSearch, setResultSearch] = useState([]);
  
  const { pathname } = useLocation();
  const history = useHistory();
  
  const MAX_LENGTH = 12;

  async function requestAPI() {
    const { filterOption, valueSearch } = filterSearch;
    if (filterOption === 'first-letter-search' && valueSearch.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    if (pathname === '/meals') {
      const response = await requestMealsAPI(filterOption, valueSearch);
      if (response === undefined) {
        setResultSearch([]);
      }
      setResultSearch(response);
    } else if (pathname === '/drinks') {
      const response = await requestDrinksAPI(filterOption, valueSearch);
      if (response === undefined) {
        setResultSearch([]);
      }
      setResultSearch(response);
    }
  }

  useEffect(() => {
    function resultsConditions() {
      if (resultSearch === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      } else {
        if (pathname === '/meals' && resultSearch.length === 1) {
          history.push(`/meals/${resultSearch[0].idMeal}`);
        }
        if (pathname === '/drinks' && resultSearch.length === 1) {
          history.push(`/drinks/${resultSearch[0].idDrink}`);
        }
        if (resultSearch.length > 1) {
          // setRenderedSearchResults(true);
        }
      }
    }
    resultsConditions();
  }, [resultSearch, history, pathname]);

  function handleChange({ target }) {
    setFilterSearch({
      ...filterSearch,
      [target.name]: target.value,
    });
  }

  async function handleClick() {
    await requestAPI();
  }

  function redirectToDetails(id, type) {
    history.push(`/${type}/${id}`);
  }
  
  return (
    <div className="search-bar-container">
      
      <label htmlFor="search">
        <input
          type="text" 
          id="search"
          name="valueSearch"
          value={ filterSearch.valueSearch }
          onChange={ handleChange }
          data-testid="search-input"
        />
      </label>
      
      <label htmlFor="ingredient-search">
        <input
          type="radio"
          id="ingredient-search"
          name="filterOption"
          value="ingredient-search"
          onChange={ handleChange }
          data-testid="ingredient-search-radio"
        />
        Ingredient
      </label>
      
      <label htmlFor="name-search">
        <input
          type="radio"
          id="name-search"
          name="filterOption"
          value="name-search"
          onChange={ handleChange }
          data-testid="name-search-radio"
        />
        Name
      </label>

      <label htmlFor="first-letter-search">
        <input
          type="radio"
          id="first-letter-search"
          name="filterOption"
          value="first-letter-search"
          onChange={ handleChange }
          data-testid="first-letter-search-radio"
        />
        First letter
      </label>
      
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </button>

      <div>
        {resultSearch && resultSearch.slice(0, MAX_LENGTH).map((result, index) => {
          if (pathname === '/meals') {
            return (
              <div key={ result.idMeal } data-testid={ `${index}-recipe-card` }>
                <button
                  type="button"
                  onClick={ () => redirectToDetails(result.idMeal, 'meals') }
                >
                  <p data-testid={ `${index}-card-name` }>
                    {result.strMeal}
                  </p>
                </button>
                <button
                  type="button"
                  onClick={ () => redirectToDetails(result.idMeal, 'meals') }
                >
                  <img
                    src={ result.strMealThumb }
                    alt={ result.strMeal }
                    data-testid={ `${index}-card-img` }
                  />
                </button>
              </div>
            );
          }
          return (
            <div key={ result.idDrink } data-testid={ `${index}-recipe-card` }>
              <button
                type="button"
                onClick={ () => redirectToDetails(result.idDrink, 'drinks') }
              >
                <p data-testid={ `${index}-card-name` }>{result.strDrink}</p>
              </button>
              <button
                type="button"
                onClick={ () => redirectToDetails(result.idMeal, 'meals') }
              >
                <img
                  src={ result.strDrinkThumb }
                  alt={ result.strDrink }
                  data-testid={ `${index}-card-img` }
                />
              </button>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default SearchBar;
