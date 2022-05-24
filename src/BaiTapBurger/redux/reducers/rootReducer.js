

import { combineReducers } from "redux";
import { monAnReducer } from "./monAnReducer";

export const rootReducer = combineReducers({
  monAn: monAnReducer,
  
})