import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    successLogin: (state) => {
      state.auth = true;
    }
  }
});

export const { successLogin } = loginSlice.actions;

export default loginSlice.reducer;