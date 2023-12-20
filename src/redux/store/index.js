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
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: "CApStoneProJectFinale",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
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
