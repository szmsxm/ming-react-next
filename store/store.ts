import { createSlice } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
  name: "username",
  initialState: {
    uservalue: "",
  },
  reducers: {
    changeName(state, username: { payload: string }) {
      state.uservalue = username.payload;
      console.log("changeName", state.uservalue);
    },
  },
});

export const { changeName } = usernameSlice.actions;
export default usernameSlice.reducer;
