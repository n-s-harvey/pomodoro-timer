import React from "react";
import BreakControls from "./BreakControls";
import FocusControls from "./FocusControls";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

export default function Timer() {
  return (
    <>
      <BreakControls />
      <FocusControls />
      <TimerDisplay />
      <TimerControls />
    </>
  )
}
