import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "./phonebookSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },

  //console error fix
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
