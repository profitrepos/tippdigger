import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import appReducer from "./app/appSlice";

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
