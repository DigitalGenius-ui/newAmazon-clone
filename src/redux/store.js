import { configureStore } from "@reduxjs/toolkit";
import { amazonApi } from "./fetchData";
import productReducer from './productSlice';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, productReducer)

export const store = configureStore({
    reducer : {
      products : persistedReducer,
      [amazonApi.reducerPath]: amazonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(amazonApi.middleware),
  });