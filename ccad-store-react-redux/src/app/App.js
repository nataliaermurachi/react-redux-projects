import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import {Cart} from '../features/cart/Cart';
import {SearchTerm} from '../features/searchTerm/SearchTerm';
import {getFilteredItems} from '../utilities/utilities';

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm 
        searchTerm={state.searchTerm} 
        dispatch={dispatch}/>
      <Inventory
        inventory={getFilteredItems(state.inventory, state.searchTerm)}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart 
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
