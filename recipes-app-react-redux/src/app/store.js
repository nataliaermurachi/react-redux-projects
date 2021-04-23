import { configureStore } from "@reduxjs/toolkit";
import favoriteRecipesReducer from "../features/favoriteRecipes/favoriteRecipesSlice";
import searchTermReducer from "../features/searchTerm/searchTermSlice";
import allRecipesReducer from "../features/allRecipes/allRecipesSlice";

export default configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  },
});