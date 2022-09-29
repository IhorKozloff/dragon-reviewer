import { configureStore } from "@reduxjs/toolkit";
import mainRocketReducer from "./mainRocketReducer";
import moreRocketsReducer from "./moreRocketsReducer";
import userReducer from "./authSlice";
import favoritesReducer from "./favoritesSlice";

import storage from 'redux-persist/lib/storage'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistMainRocketConfig = {
    key: 'mainRocketData',
    storage,
}
const persistOtherRocketsConfig = {
    key: 'otherRocketsData',
    storage,
}
const persistAuthConfig = {
    key: 'authData',
    storage,
}
const persistFavoritesConfig = {
    key: 'favoritesData',
    storage,
}

const persistetMainRocketReducer = persistReducer(persistMainRocketConfig, mainRocketReducer);
const persistetOtherRocketsReducer = persistReducer(persistOtherRocketsConfig, moreRocketsReducer);
const persistetAuthReducer = persistReducer(persistAuthConfig, userReducer);
const persistetFavoritesReducer = persistReducer(persistFavoritesConfig, favoritesReducer);

export const eyeshieldStore = configureStore({

    reducer: {
        mainData: persistetMainRocketReducer,
        otherData: persistetOtherRocketsReducer,
        authStatus: persistetAuthReducer,
        favorites: persistetFavoritesReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(eyeshieldStore)


