import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import translateReducer from "./slices/translateSlice";

export const store = configureStore({
  reducer: { language: languageReducer, translate: translateReducer },
});
