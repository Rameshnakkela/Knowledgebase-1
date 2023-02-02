import { configureStore, combineReducers } from "@reduxjs/toolkit";
import SearchBarSlice from "./pages/SearchBar/SearchBarSlice";

const homeCombineReducers = combineReducers({
  searchBar: SearchBarSlice
});

const rootReducer = combineReducers({
  home: homeCombineReducers
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;