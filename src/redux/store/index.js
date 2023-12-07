import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import loadingReducer from "../reducers/loadingReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../reducers/token";
import registrazioneReducer from "../reducers/registrazione";
import membersReducer from "../reducers/members";
import myProfileReducer from "../reducers/myProfile";
import myLoginReducer from "../reducers/loginEmail";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};
const rootReducer = combineReducers({
  loading: loadingReducer,
  token: tokenReducer,
  registrazione: registrazioneReducer,
  members: membersReducer,
  profile: myProfileReducer,
  login: myLoginReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
