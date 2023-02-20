import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import { legacy_createStore as createStore,applyMiddleware,compose} from 'redux';
import thunk from "redux-thunk";
import Reducers from "./reducers";

const store= createStore(Reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,  
)
