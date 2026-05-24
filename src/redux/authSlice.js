import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    token: null,
    role: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    setLogin: (state, action) => {
      state.token = action.payload;
      state.role = action.payload.role;
    },
    setLogout: (state) => {
      state.token = null;
      state.role = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setLogin, setLogout } =
  counterSlice.actions;

export default counterSlice.reducer;
