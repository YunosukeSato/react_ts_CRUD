import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { ReactNode } from "react";

import { rootReducer } from "./redux/rootReducer";

let middleware: any[] = [];
if (import.meta.env.DEV) {
  middleware = [...middleware];
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

const persistor = persistStore(store);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
