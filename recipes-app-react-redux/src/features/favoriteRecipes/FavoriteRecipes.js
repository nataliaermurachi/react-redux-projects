import React from 'react';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

// Import removeRecipe from favoriteRecipesSlice.js

export const FavoriteRecipes = (props) =>{
  
  // Extract favoriteRecipe and dispatch from props.
  
  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
  };
  
  // Check to see if favoriteRecipes is empty.
  const isEmpty = 'replace_me'
  if (isEmpty) {
    return (
      <div className = "recipes-container">
        <p> Choose Your Favorites Recipes! </p>
      </div>
    )
  }

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div className="recipes-container">
      {REPLACE_ME.map(makeFavoriteRecipeComponent)}
    </div>
  );
};

function makeFavoriteRecipeComponent(recipe) {
  return (
    <Recipe recipe={recipe} key={recipe.id}>
      <FavoriteButton
        onClickHandler={() => onRemoveRecipeHandler(recipe)}
        icon={unfavoriteIconUrl}
      >
        Remove Favorite
      </FavoriteButton>
    </Recipe>
  )
}