import {createSlice} from '@reduxjs/toolkit';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

const options = {
  name: 'favoriteRecipes',
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      // return [...state, action.payload]; because of immer library allows us to safely mutate data, when using createSlice()
      return state.push(action.payload);
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id);
    }
  }
}
export const favoriteRecipesSlice = createSlice(options);
/****************** redux-toolkit replaces this old logic with the code above */
// const initialState = [];
// export const favoriteRecipesReducer = (favoriteRecipes = initialState, action) => {
//   switch (action.type) {
//     case 'favoriteRecipes/addRecipe':
//       return [...favoriteRecipes, action.payload]
//     case 'favoriteRecipes/removeRecipe':
//       return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id)
//     default:
//       return favoriteRecipes;
//   }
// }

// export function addRecipe(recipe) {
//   return {
//     type: 'favoriteRecipes/addRecipe',
//     payload: recipe
//   }
// }

// export function removeRecipe(recipe) {
//   return {
//     type: 'favoriteRecipes/removeRecipe',
//     payload: recipe
//   }
// }

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

console.log(favoriteRecipesSlice.name);
for(let action in favoriteRecipesSlice.actions) {
  console.log(action);
}
export const {addRecipe, removeRecipe} = favoriteRecipesSlice.actions;
console.log(favoriteRecipesSlice);
export default favoriteRecipesSlice.reducer;