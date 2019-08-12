import { combineReducers, createStore } from "redux";

import recherche from "../reducers/recherche";

const store = createStore(
    combineReducers({ recherche })

    // This plugin is for testing redux in chrome 
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
