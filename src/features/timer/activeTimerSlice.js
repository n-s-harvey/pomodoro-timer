import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    value: {
      minutes: 25,
      seconds: 0,
      timerName: 'Session',
    }
  },
  reducers: {
    setMinutes: (state, action) => {
      state.value.minutes = action.payload.minutes;
    },
    setSeconds: (state, action) => {
      state.value.seconds = action.payload.seconds;
    }
  }
})

export const { setMinutes, setSeconds } = timerSlice.actions;

export default timerSlice.reducer;
