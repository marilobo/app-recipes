import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input
        type="text" 
        data-testid="search-input"
      />
      <label htmlFor="Ingredient">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="Ingredient"
          name="search-radio"
        />
        Ingredient
      </label>
      <label htmlFor="Name">
        <input
          type="radio"
          data-testid="name-search-radio"
          id="Name"
          name="search-radio"
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter"
          name="search-radio"
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar;
