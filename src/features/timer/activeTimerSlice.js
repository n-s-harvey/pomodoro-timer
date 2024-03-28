import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    value: {
      minutes: 25,
      seconds: 0,
      timerName: 'Session',
      beginningTime: 0,
    }
  },
  reducers: {
    setMinutes: (state, action) => {
      state.value.minutes = action.payload.minutes;
    },
    setSeconds: (state, action) => {
      state.value.seconds = action.payload.seconds;
    },
    setBeginningTime: (state, action) => {
      state.value.beginningTime = Date.now();
    },
  }
})

export const { setMinutes, setSeconds, setBeginningTime } = timerSlice.actions;

export default timerSlice.reducer;
