import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import loadingReducer from "../reducers/loadingReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["query", "jobs", "favorites", "follow"],
};
const rootReducer = combineReducers({
  loading: loadingReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
