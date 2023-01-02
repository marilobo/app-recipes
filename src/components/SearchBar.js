import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input
        type="text" 
        data-testid="search-input"
      />
      <label htmlFor="Ingredient">
        Ingredient
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="Ingredient"
          name="search-radio"
        />
      </label>
      <label htmlFor="Name">
        Name
        <input
          type="radio"
          data-testid="name-search-radio"
          id="Name"
          name="search-radio"
        />
      </label>
      <label htmlFor="first-letter">
        First Letter
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter"
          name="search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        search
      </button>
    </div>
  )
}

export default SearchBar;
