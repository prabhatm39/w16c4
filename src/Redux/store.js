// create store here
import { legacy_createStore , applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {composWithDevTools} from 'redux-devtools-extenion'
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  products: reducer
})
export const store =  legacy_createStore(rootReducer, composWithDevTools(applyMiddleware(thunk)));;

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}


