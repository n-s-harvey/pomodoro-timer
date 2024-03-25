import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./features/timer/activeTimerSlice";

export default configureStore({
  reducer: {
    timer: timerReducer,
  },
})
