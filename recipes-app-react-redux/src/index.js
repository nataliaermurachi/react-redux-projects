import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App.js';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';

const render = () => {
  // Pass `state` and `dispatch` props to <App />
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();
// Subscribe render to changes to the `store`
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
store.subscribe(render);