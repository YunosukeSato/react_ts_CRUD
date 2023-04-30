import { combineReducers } from "redux";
import dataSlice from "./dataSlice";

export const rootReducer = combineReducers({
  dataSlice: dataSlice,
})

export type RootState = ReturnType<typeof rootReducer>;