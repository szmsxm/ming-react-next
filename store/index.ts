import { configureStore } from "@reduxjs/toolkit";

import usernameReducer from "./store";

const store = configureStore({
  reducer: {
    username: usernameReducer,
  },
});

export default store;
