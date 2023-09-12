import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';
import { PomodoroTimerProps } from '../interfaces/pomodoro-timer-props';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PomodoroTimer(props: PomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return <div>Pomodoro Timer {secondsToTime(mainTime)}</div>;
}
