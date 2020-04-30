import { createStore } from "redux";
import favoriteReducer from "./Reducers/favoriteReducer";
import { persistReducer } from "redux-persist";
import { AsyncStorage } from 'react-native';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export default createStore(persistReducer(persistConfig, favoriteReducer));
