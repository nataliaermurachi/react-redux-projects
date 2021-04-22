// Import createStore and combineReducers here.
import {createStore, combineReducers} from 'redux';
// Import the slice reducers here.
import {inventoryReducer} from '../features/inventory/inventorySlice';
import {cartReducer} from '../features/cart/cartSlice';
import {currencyFilterReducer} from '../features/currencyFilter/currencyFilterSlice';
import {searchTermReducer } from '../features/searchTerm/searchTermSlice';


// Create and export the store here.
export const store = createStore(combineReducers({
  inventory: inventoryReducer, 
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  searchTerm: searchTermReducer
}));